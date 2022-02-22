import { displayNav } from "./ui/common/displayNav.js";
import { baseUrl } from "./settings/api.js";
import { displayHeroImage } from "./ui/homepage/displayHeroImage.js";
import { displayFeaturedProducts } from "./ui/homepage/displayFeaturedProducts.js";
const imageUrl = baseUrl + "home";
const featuredUrl = baseUrl + "products";

// display top nav
displayNav();

// Display hero image on homepage
(async function callHeroImg() {
  try {
    const response = await fetch(imageUrl);
    const json = await response.json();

    displayHeroImage(json);
  } catch (error) {
    console.log(error);
  }
})();

// Display Featured Products
(async function featuredProducts() {
  try {
    const response = await fetch(featuredUrl);
    const json = await response.json();

    displayFeaturedProducts(json);
  } catch (error) {
    console.log(error);
  }
})();
