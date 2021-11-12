const slider = document.getElementById("slider");

const sliderButton = document.getElementById('slider-button')

const change = (e) => {
  const sliderPos = e
  const fore = document.getElementById("foreground-img")
  fore.style.width = `${sliderPos}%`;
  sliderButton.style.left= `calc(${sliderPos}% - 18px)`;
};
