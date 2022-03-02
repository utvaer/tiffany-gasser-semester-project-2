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
    addToBag(json);
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
let amountDisplay = document.querySelector(".cart span");
const shoppingBag = [
  {
    productId: 1,
    quantity: 0,
  },
];

function addToBag(json) {
  let addBagBtn = document.querySelectorAll(".add-bag-btn");

  for (let i = 0; i < addBagBtn.length; i++) {
    addBagBtn[i].addEventListener("click", () => {
      console.log("added to cart");
      itemsAdded(json[i]);
    });
  }
}

function ProductsinBag() {
  let sneakersAdded = localStorage.getItem("sneakers");

  if (sneakersAdded) {
    amountDisplay.textContent = sneakersAdded;
  }
}

function itemsAdded(json) {
  let sneakersAdded = localStorage.getItem("sneakers");

  sneakersAdded = parseInt(sneakersAdded);

  if (sneakersAdded) {
    localStorage.setItem("sneakers", sneakersAdded + 1);
    amountDisplay.textContent = sneakersAdded + 1;
  } else {
    localStorage.setItem("sneakers", 1);
    amountDisplay.textContent = 1;
  }
  setItems(json);
}

function setItems(json) {
  let cartItems = localStorage.getItem("productsInBag");
  cartItems = JSON.parse(cartItems);
  console.log("my cartItems are", cartItems);
  localStorage.setItem("productsInBag", JSON.stringify(json));
}
ProductsinBag();

/*function saveToBag(sneakers) {
  localStorage.setItem("sneakers", JSON.stringify(favorites));
}*/

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
