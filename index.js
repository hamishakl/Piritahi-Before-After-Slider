const slider = document.getElementById("slider");


const change = (e) => {
  const sliderPos = e
  const fore = document.getElementById("foreground-img")
  fore.style.width = `${sliderPos}%`;
  document.getElementById('slider-button').style.left= `calc(${sliderPos}% - 18px)`;
};
