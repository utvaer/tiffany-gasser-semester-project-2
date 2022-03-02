import { displayNav } from "./ui/common/displayNav.js";
import { baseUrl } from "./settings/api.js";
import { displayProducts } from "./ui/displayProducts.js";
import { clearStorage, getToken, saveToStorage } from "./utils/storage.js";
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
    addToBag();

    // ADD TO CART
  } catch (error) {
    console.log(error);
  }
})();

//Display Admin Add New Product
const token = getToken();
if (token) {
  addAdminAccess();
}

//add to bag

const shoppingBag = [
  {
    productId: 1,
    quantity: 0,
  },
];

function addToBag() {
  let addBagBtn = document.querySelectorAll(".add-bag-btn");

  for (let i = 0; i < addBagBtn.length; i++) {
    addBagBtn[i].addEventListener("click", () => {
      console.log("added to cart");
      saveToStorage("sneaker", 1);
    });
  }
}

function itemsAdded() {
  let sneakersAdded = localStorage.getItem("sneaker");
  console.log(typeof sneakersAdded);
  localStorage.setItem("sneaker", 1);
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

// Add to bag
