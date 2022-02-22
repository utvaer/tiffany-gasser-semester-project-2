import { baseUrl } from "./settings/api.js";
const heroImg = document.querySelector(".hero-image");
const url = baseUrl + "home";

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

/*displayImage(image){
    const imageUrl = 

    heroImg.innerHTML = ``;

}*/
