import { displayNav } from "./ui/common/displayNav.js";
import { baseUrl } from "./settings/api.js";
import { displayProducts } from "./ui/displayProducts.js";
import { getToken } from "./utils/storage.js";
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
    console.log(json);

    products.innerHTML = "";
    displayProducts(json);
    searchProducts(json);
  } catch (error) {
    console.log(error);
  }
})();

//Display Admin Add New Product
const token = getToken();
if (token) {
  addAdminAccess();
}

// FILTER BY WORK IN PROGRESS
/*const brandSelection = document.querySelectorAll(".brand-category");
brandSelection.forEach(function (brand) {
  brand.onclick = function (event) {
    const brandChosen = event.target.value;
    console.log(brandChosen);
    const brandUrl = baseUrl + `products?brand=${brandChosen}`;
    products.innerHTML = "";
    displayProducts(brandUrl);
  };
});

function selectBrand(json) {
  for (let i = 0; i < json.length; i++) {
    const brandSelection = document.querySelectorAll(".brand-category");
    brandSelection.onclick = function (event) {
      const brandChosen = event.target.value;
      console.log(brandChosen);
      console.log("hi");
    };
  }
}*/
