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

const imgHeight = () => {
  var myImg = document.querySelector("#before-img");
  var currHeight = myImg.clientHeight;
  document.getElementById("slider--container").style.height = currHeight;
};

window.onload = function () {
  imgHeight();
};
