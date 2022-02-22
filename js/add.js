import { displayNav } from "./ui/common/displayNav.js";
import { baseUrl } from "./settings/api.js";
import { getToken } from "./utils/storage.js";

displayNav();

const productForm = document.querySelector(".new-products-form");
const title = document.querySelector("#floatingInput");
const brand = document.querySelector("#floatingBrand");
const description = document.querySelector("#floatingTextarea");
const price = document.querySelector("#floatingPrice");

//OBS NEED TO ADD IMAGE AND STYLE SELECTION

productForm.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const titleValue = title.value.trim();
  const brandValue = brand.value.trim();
  const descriptionValue = description.value.trim();
  const priceValue = parseFloat(price.value);

  if (
    titleValue.length === 0 ||
    brandValue.length === 0 ||
    descriptionValue.length === 0 ||
    priceValue.length === 0
  ) {
    console.log("give me somethinnnnnn");
  }
}
