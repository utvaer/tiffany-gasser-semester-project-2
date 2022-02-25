import { displayProducts } from "../../ui/displayProducts.js";

const searchBtn = document.querySelector(".search-btn");
const product = document.querySelector(".product-detail");

searchBtn.addEventListener("submit", searchFile);

export function searchFile(json) {
  const searchInput = document.querySelector("#search-field");
  const searchValue = searchInput.value.trim().toLowerCase();

  const filteredProducts = json.filter(function (result) {
    if (result.toLowerCase().contains(searchValue)) {
      return true;
    }
  });

  product.innerHTML = "";
  displayProducts(filteredProducts);
}
