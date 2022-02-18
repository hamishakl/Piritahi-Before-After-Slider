const beforeImg = document.getElementById("before-img");
const afterImg = document.getElementById("after-img");

const owairakaAfter = "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e3ab55fb4a7b9537f0_OwairakaNow.jpg";
const owairakaBefore = "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e11542028a13a2cc16_OwairakaBefore.jpg";
const roskillSouthBefore = "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e1f89fdd78f9d8a4da_RoskillSouthBefore.jpg";
const roskillSouthAfter = "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e33e800e0640a3ec64_RoskillSouthNow.jpg";
const waikowhaiBefore = "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e16516da25bfd3bd26_WaikowhaiBefore.jpg";
const waikowhaiAfter = "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e350ccd956c173f619_WaikowhaiNow.jpg";

const owairaka = document.querySelectorAll(".owairaka-btn");
const roskillSouth = document.querySelectorAll(".roskillsouth-btn");
const waikowhai = document.querySelectorAll(".waikowhai-btn");

for (let i = 0; i < owairaka.length; i++) {
  owairaka[i].addEventListener("click", function owairakaChange() {
  beforeImg.srcset = owairakaBefore
  afterImg.srcset = owairakaAfter
});
}
for (let i = 0; i < roskillSouth.length; i++) {
  roskillSouth[i].addEventListener("click", function roskillSouthChange() {
  beforeImg.srcset = roskillSouthBefore
  afterImg.srcset = roskillSouthAfter
});
}
for (let i = 0; i < waikowhai.length; i++) {
  waikowhai[i].addEventListener("click", function waikowhaiChange() {
  beforeImg.srcset = waikowhaiBefore
  afterImg.srcset = waikowhaiAfter
});
}