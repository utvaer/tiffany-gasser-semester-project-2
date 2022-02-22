import { displayNav } from "./ui/common/displayNav.js";
import { baseUrl } from "./settings/api.js";
const heroImg = document.querySelector(".hero-image");
const url = baseUrl + "home";

// display top nav
displayNav();

// Display hero image on homepage
(async function callHeroImg() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
    displayImage(json);
  } catch (error) {
    console.log(error);
  }
})();

function displayImage(image) {
  const imageUrl = image.hero_banner.formats.large.url;
  const imageAlt = image.hero_banner_alt_text;

  heroImg.innerHTML = `<div>
                          <img src="${imageUrl}" alt="${imageAlt}">
                        </div>`;
}
