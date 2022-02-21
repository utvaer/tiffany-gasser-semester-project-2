import { baseUrl } from "./settings/api.js";
import { displayProducts } from "./ui/displayProducts.js";
const products = document.querySelector(".row");
const productsUrl = baseUrl + "products";

(async function apiCall() {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    products.innerHTML = "";
    displayProducts(json);
  } catch (error) {
    console.log(error);
  }
})();
