import { displayNav } from "./ui/common/displayNav.js";
import { baseUrl } from "./settings/api.js";
import { displayProducts } from "./ui/displayProducts.js";
import { clearStorage, getToken } from "./utils/storage.js";
import { addAdminAccess } from "./ui/products/addBtn.js";
import { searchProducts } from "./components/common/searchProducts.js";

const products = document.querySelector(".row");
const productsUrl = baseUrl + "products";

//display Main Nav
displayNav();

// display products list
(async function apiCall() {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();
    //console.log(json);

    products.innerHTML = "";
    displayProducts(json);
    searchProducts(json);
    //FilterByBrand(json);
  } catch (error) {
    console.log(error);
  }
})();

//Display Admin Add New Product
const token = getToken();
if (token) {
  addAdminAccess();
}
