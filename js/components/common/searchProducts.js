import { displayProducts } from "../../ui/displayProducts.js";
import { displayMessage } from "./displayMessage.js";

const searchResult = document.querySelector(".search-result");

//OBS ENTER KEY NOT WORKING
export function searchProducts(json) {
  // Get the input field
  const searchInput = document.querySelector("#search-input");
  const searchBtn = document.querySelector(".search-btn");

  // Execute a function when the user releases a key on the keyboard
  searchInput.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      searchBtn.onclick = function () {
        {
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
          }
        }
      };
    }
  });
}

/*export function searchProducts(json) {
  const searchBtn = document.querySelector(".search-btn");

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
    }
  };
}*/
