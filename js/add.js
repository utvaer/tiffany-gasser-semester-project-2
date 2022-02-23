import { displayNav } from "./ui/common/displayNav.js";
import { baseUrl } from "./settings/api.js";
import { getToken } from "./utils/storage.js";

const token = getToken();
if (!token) {
  location.href = "/";
}

// Display Main Nav
displayNav();

const productForm = document.querySelector("#new-products-form");
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
    priceValue.length === 0 ||
    isNaN(priceValue)
  ) {
    //Change to form validation: return displayMessage();
    console.log("give me somethinnnnnn");
  }

  addProduct(titleValue, brandValue, descriptionValue, priceValue);
}

async function addProduct(title, brand, description, price) {
  const url = baseUrl + "products";
  const data = JSON.stringify({
    title: title,
    brand: brand,
    description: description,
    price: price,
  });
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);

    if (json.created_at) {
      //Change to display message
      console.log("you did it!");
      form.reset();
    }
  } catch (error) {
    //Change to display message
    console.log(error);
  }
}
