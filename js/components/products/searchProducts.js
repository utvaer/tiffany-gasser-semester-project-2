import { displayProducts } from "../../ui/products/displayProducts.js";
import { displayMessage } from "../common/displayMessage.js";

export function searchProducts(json) {
  const searchBtn = document.querySelector(".search-btn");
  const searchResult = document.querySelector(".search-result");

  searchBtn.onclick = function () {
    const searchInput = document.querySelector("#search-input");
    const searchValue = searchInput.value.trim().toLowerCase();

    const filteredProducts = json.filter(function (result) {
      if (
        result.title.toLowerCase().includes(searchValue) ||
        result.brand.toLowerCase().includes(searchValue)
      ) {
        return true;
      }
    });
    console.log(filteredProducts);
    displayProducts(filteredProducts);

    if (filteredProducts.length === 0) {
      displayMessage(
        `There are no results with the name of "${searchValue}"`,
        ".message-container"
      );
      searchResult.innerHTML = `<a class="btn btn-primary" href="products.html" role="button">Back to Products</a>`;
    } else {
      displayMessage(
        `We found ${filteredProducts.length} product(s)`,
        ".message-container"
      );
      searchResult.innerHTML = `<a class="btn btn-primary" href="products.html" role="button">Back to Products</a>`;
    }
  };
}
