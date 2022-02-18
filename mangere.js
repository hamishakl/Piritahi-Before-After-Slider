const beforeImg = document.getElementById("before-img");
const afterImg = document.getElementById("after-img");

const aorereBefore = "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e07ed5e114f1395b0d_AorereBefore.jpg";
const aorereAfter = "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e2c724774bdf1aef2c_AorereNow.jpg";
const mangereWestBefore = "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e2b3fd2b516789059b_MangereWestBefore.jpg";
const mangereWestAfter = "https://uploads-ssl.webflow.com/6088a238f6b62c4d3bae2127/61b9c1e2b9602e5012eb078b_MangereWestNow.jpg";

const aorere = document.querySelectorAll(".aorere-btn");
const mangereWest = document.querySelectorAll(".mangereWest-btn");

for (let i = 0; i < aorere.length; i++) {
  aorere[i].addEventListener("click", function owairakaChange() {
  beforeImg.srcset = aorereBefore
  afterImg.srcset = aorereAfter
});
}

for (let i = 0; i < mangereWest.length; i++) {
  mangereWest[i].addEventListener("click", function owairakaChange() {
  beforeImg.srcset = mangereWestBefore
  afterImg.srcset = mangereWestAfter
});
}


