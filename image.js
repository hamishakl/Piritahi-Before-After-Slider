const beforeImg = document.getElementById("before-img");
const afterImg = document.getElementById("after-img");

const owairaka = document.getElementById("owairaka-btn");
owairaka.addEventListener("click", function owairakaChange() {
  beforeImg.srcset =
    "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e3ab55fb4a7b9537f0_OwairakaNow.jpg";
  afterImg.srcset =
    "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e11542028a13a2cc16_OwairakaBefore.jpg";
});

const roskillsouth = document.getElementById("roskillsouth-btn");
roskillsouth.addEventListener("click", function roskillChange() {
  beforeImg.srcset =
    "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e1f89fdd78f9d8a4da_RoskillSouthBefore.jpg";
  afterImg.srcset =
    "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e33e800e0640a3ec64_RoskillSouthNow.jpg";
});

const waikowhai = document.getElementById("waikowhai-btn");
waikowhai.addEventListener("click", function waikowhaiChange() {
  beforeImg.srcset =
    "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e16516da25bfd3bd26_WaikowhaiBefore.jpg";
  afterImg.srcset =
    "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e350ccd956c173f619_WaikowhaiNow.jpg";
});

const mangereWest = document.getElementById("mangereWest-btn");
mangereWest.addEventListener("click", function mangereWestChange() {
  beforeImg.srcset =
    "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e2b3fd2b516789059b_MangereWestBefore.jpg";
  afterImg.srcset =
    "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e2b9602e5012eb078b_MangereWestNow.jpg";
});

const aorere = document.getElementById("aorere-btn");
aorere.addEventListener("click", function aorereChange() {
  beforeImg.srcset =
    "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e07ed5e114f1395b0d_AorereBefore.jpg";
  afterImg.srcset =
    "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e2c724774bdf1aef2c_AorereNow.jpg";
});
