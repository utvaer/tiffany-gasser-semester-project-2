import { displayNav } from "../ui/common/displayNav.js";
import { baseUrl } from "../settings/api.js";
import { displayProducts } from "../ui/products/displayProducts.js";
import { clearStorage, getToken } from "../utils/storage.js";
import { addAdminAccess } from "../ui/products/admin/addBtn.js";
import { searchProducts } from "../components/products/searchProducts.js";

const products = document.querySelector(".row");
const productsUrl = baseUrl + "products";

//display Main Nav
displayNav();

// display products list
(async function apiCall() {
  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    products.innerHTML = "";
    displayProducts(json);
    searchProducts(json);
  } catch (error) {
    console.log(error);
  }
})();

//Display Admin Access
const token = getToken();
if (token) {
  addAdminAccess();
}
