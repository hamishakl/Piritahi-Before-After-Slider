"use strict";

const imageContainer = document.querySelector(".slider--container");

let minScale = 1;
let maxScale = 4;
let imageWidth;
let imageHeight;
let containerWidth;
let containerHeight;
let displayImageX = 0;
let displayImageY = 0;
let displayImageScale = 1;

let displayDefaultWidth;
let displayDefaultHeight;

let rangeX = 0;
let rangeMaxX = 0;
let rangeMinX = 0;

let rangeY = 0;
let rangeMaxY = 0;
let rangeMinY = 0;

let displayImageRangeY = 0;

let displayImageCurrentX = 0;
let displayImageCurrentY = 0;
let displayImageCurrentScale = 1;

const slider = document.getElementById("slider--range");

const sliderButton = document.getElementById("slider--button");

const change = () => {
  const fore = document.getElementById("after-img");
  const border = document.getElementById("after-img-border");
  let slideValue = document.getElementById("slider--range").value;
  let slideValue2 = document.getElementById("slider--range").value * 1.002;
  fore.style.clipPath =
    "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
  border.style.clipPath =
    "polygon(0 0," + slideValue2 + "% 0," + slideValue2 + "% 100%, 0 100%)";
};

function resizeContainer() {
  containerWidth = imageContainer.offsetWidth;
  containerHeight = imageContainer.offsetHeight;
  if (displayDefaultWidth !== undefined && displayDefaultHeight !== undefined) {
    displayDefaultWidth = displayImage.offsetWidth;
    displayDefaultHeight = displayImage.offsetHeight;
    updateRange();
    displayImageCurrentX = clamp(displayImageX, rangeMinX, rangeMaxX);
    displayImageCurrentY = clamp(displayImageY, rangeMinY, rangeMaxY);
    updateDisplayImage(
      displayImageCurrentX,
      displayImageCurrentY,
      displayImageCurrentScale
    );
  }
}

resizeContainer();

function clamp(value, min, max) {
  return Math.min(Math.max(min, value), max);
}

function clampScale(newScale) {
  return clamp(newScale, minScale, maxScale);
}

window.addEventListener("resize", resizeContainer, true);

const displayImage = document.getElementById("slider--container");
const preventDrag = () => {
  imageWidth = displayImage.width;
  imageHeight = displayImage.height;
  displayImage.addEventListener("mousedown", (e) => e.preventDefault(), false);
  displayDefaultWidth = displayImage.offsetWidth;
  displayDefaultHeight = displayImage.offsetHeight;
  rangeX = Math.max(0, displayDefaultWidth - containerWidth);
  rangeY = Math.max(0, displayDefaultHeight - containerHeight);
};
preventDrag();
imageContainer.addEventListener(
  "wheel",
  (e) => {
    displayImageScale = displayImageCurrentScale = clampScale(
      displayImageScale + e.wheelDelta / 800
    );
    updateRange();
    displayImageCurrentX = clamp(displayImageCurrentX, rangeMinX, rangeMaxX);
    displayImageCurrentY = clamp(displayImageCurrentY, rangeMinY, rangeMaxY);
    updateDisplayImage(
      displayImageCurrentX,
      displayImageCurrentY,
      displayImageScale
    );
  },
  false
);

function updateDisplayImage(x, y, scale) {
  const transform =
    "translateX(" +
    x +
    "px) translateY(" +
    y +
    "px) translateZ(0px) scale(" +
    scale +
    "," +
    scale +
    ")";
  displayImage.style.transform = transform;
  displayImage.style.WebkitTransform = transform;
  displayImage.style.msTransform = transform;
}

function updateRange() {
  rangeX = Math.max(
    0,
    Math.round(displayDefaultWidth * displayImageCurrentScale) - containerWidth
  );
  rangeY = Math.max(
    0,
    Math.round(displayDefaultHeight * displayImageCurrentScale) -
      containerHeight
  );

  rangeMaxX = Math.round(rangeX / 2);
  rangeMinX = 0 - rangeMaxX;

  rangeMaxY = Math.round(rangeY / 2);
  rangeMinY = 0 - rangeMaxY;
}

const hammertime = new Hammer(imageContainer);
const swiper = new Hammer(imageContainer);
const emulator = new Hammer(imageContainer);
hammertime.get("pinch").set({ enable: true, pointers: 2 });
hammertime.get("pan").set({ direction: Hammer.DIRECTION_ALL, pointers: 2 });
hammertime.get("rotate").set({ enable: true });

hammertime.on("rotate", function (ev) {
  console.log();
});

swiper.get("pan").set({ direction: Hammer.DIRECTION_ALL });

swiper.on("panleft panright panup pandown", function (ev) {
  if (ev.type === "panleft" && ev.srcEvent.shiftKey === false) {
    change(slider.value--);
  } else if (ev.type === "panright" && ev.srcEvent.shiftKey === false) {
    change(slider.value++);
  } else if (
    (ev.type === "panright" && ev.srcEvent.shiftKey === true) ||
    (ev.type === "panleft" && ev.srcEvent.shiftKey === true)
  ) {
    moveOnPan(ev);
  }
});

const moveOnPan = (ev) => {
  displayImageCurrentX = clamp(displayImageX + ev.deltaX, rangeMinX, rangeMaxX);
  displayImageCurrentY = clamp(displayImageY + ev.deltaY, rangeMinY, rangeMaxY);
  updateDisplayImage(
    displayImageCurrentX,
    displayImageCurrentY,
    displayImageScale
  );
};

hammertime.on("pan", (ev) => {
  console.log("pan");
  displayImageCurrentX = clamp(displayImageX + ev.deltaX, rangeMinX, rangeMaxX);
  displayImageCurrentY = clamp(displayImageY + ev.deltaY, rangeMinY, rangeMaxY);
  updateDisplayImage(
    displayImageCurrentX,
    displayImageCurrentY,
    displayImageScale
  );
});

const moveOnPinch = (ev) => {
  displayImageCurrentScale = clampScale(ev.scale * displayImageScale);
  updateRange();
  displayImageCurrentX = clamp(displayImageX + ev.deltaX, rangeMinX, rangeMaxX);
  displayImageCurrentY = clamp(displayImageY + ev.deltaY, rangeMinY, rangeMaxY);
  updateDisplayImage(
    displayImageCurrentX,
    displayImageCurrentY,
    displayImageCurrentScale
  );
};

hammertime.on("pinch pinchmove drag", (ev) => {
  if (ev.pointerType === "touch") {
    moveOnPinch(ev);
  }
});

hammertime.on("panend pancancel pinchend pinchcancel", () => {
  displayImageScale = displayImageCurrentScale;
  displayImageX = displayImageCurrentX;
  displayImageY = displayImageCurrentY;
});

const imgHeight = () => {
  var myImg = document.querySelector("#before-img");
  var currHeight = myImg.clientHeight;
  document.getElementById("slider--container").style.height = currHeight;
};

window.onload = function () {
  imgHeight();
};
