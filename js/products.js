import { displayNav } from "./ui/common/displayNav.js";
import { baseUrl } from "./settings/api.js";
import { displayProducts } from "./ui/displayProducts.js";
import { getToken } from "./utils/storage.js";
import { addProductBtn } from "./ui/products/addBtn.js";

const products = document.querySelector(".row");
const productsUrl = baseUrl + "products";

//display Main Nav
displayNav();

//Display Admin Add New Product
const token = getToken();
if (token) {
  addProductBtn();
}

// display products list
(async function apiCall() {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();
    console.log(json);

    products.innerHTML = "";
    displayProducts(json);
  } catch (error) {
    console.log(error);
  }
})();
