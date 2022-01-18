"use strict";

const imageContainer = document.querySelector(".container");
const hud = document.querySelector("#hud");

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

const slider = document.getElementById("slider");

const sliderButton = document.getElementById("slider-button");

const change = (e) => {
  // const sliderPos = e;
  const fore = document.getElementById("foreground-img");
  const border = document.getElementById("border");
  // fore.style.width = `${sliderPos}%`;
  // sliderButton.style.left = `calc(${sliderPos}% - 18px)`;
  let slideValue = document.getElementById("slider").value;
  let slideValue2 = document.getElementById("slider").value * 1.002;
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

const displayImage = document.getElementById("container");
const sadg = () => {
  imageWidth = displayImage.width;
  imageHeight = displayImage.height;
  displayImage.addEventListener("mousedown", (e) => e.preventDefault(), false);
  displayDefaultWidth = displayImage.offsetWidth;
  displayDefaultHeight = displayImage.offsetHeight;
  rangeX = Math.max(0, displayDefaultWidth - containerWidth);
  rangeY = Math.max(0, displayDefaultHeight - containerHeight);
};
sadg();
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

hammertime.get("pinch").set({ enable: true, pointers: 2 });
hammertime.get("pan").set({ direction: Hammer.DIRECTION_ALL, pointers: 2 });
hammertime.get('rotate').set({ enable: true });

hammertime.on("rotate", function (ev) {
  console.log()
})

swiper.get("pan").set({ direction: Hammer.DIRECTION_ALL, pointers: 1 });

swiper.on("panleft panright panup pandown", function (ev) {
  if (ev.type === "panleft" || ev.type === "panup"){
  change(slider.value--);
  console.log('panning')
} 
  else if (ev.type === "panright" || ev.type === "pandown") {
    change(slider.value++);
    console.log('panning')
  }
});

hammertime.on("pan", (ev) => {
  displayImageCurrentX = clamp(displayImageX + ev.deltaX, rangeMinX, rangeMaxX);
  displayImageCurrentY = clamp(displayImageY + ev.deltaY, rangeMinY, rangeMaxY);
  updateDisplayImage(
    displayImageCurrentX,
    displayImageCurrentY,
    displayImageScale
  );
});

hammertime.on("pinch pinchmove", (ev) => {
  displayImageCurrentScale = clampScale(ev.scale * displayImageScale);
  updateRange();
  displayImageCurrentX = clamp(displayImageX + ev.deltaX, rangeMinX, rangeMaxX);
  displayImageCurrentY = clamp(displayImageY + ev.deltaY, rangeMinY, rangeMaxY);
  updateDisplayImage(
    displayImageCurrentX,
    displayImageCurrentY,
    displayImageCurrentScale
  );
  console.log("dasd")
});

hammertime.on("panend pancancel pinchend pinchcancel", () => {
  displayImageScale = displayImageCurrentScale;
  displayImageX = displayImageCurrentX;
  displayImageY = displayImageCurrentY;
});

const imgHeight = () => {
  var myImg = document.querySelector("#background-img");
  var currWidth = myImg.clientWidth;
  var currHeight = myImg.clientHeight;
  document.getElementById("container").style.height = currHeight;
};

window.onload = function () {
  imgHeight();
  console.log("loaded");
};
