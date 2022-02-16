import { baseUrl } from "./settings/api.js";
import { displayProducts } from "./ui/displayProducts.js";

const productsUrl = baseUrl + "products";

(async function apiCall() {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    console.log(json);
    displayProducts(json);
  } catch (error) {
    console.log(error);
  }
})();
