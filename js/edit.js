import { displayNav } from "./ui/common/displayNav.js";
import { baseUrl } from "./settings/api.js";
import { getToken } from "./utils/storage.js";
import { deleteButton } from "./ui/products/deleteButton.js";

const token = getToken();
if (!token) {
  location.href = "/";
}

// Display Main Nav
displayNav();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const url = baseUrl + "products/" + id;
const editForm = document.querySelector("#edit-form");
const title = document.querySelector("#floatingInput");
const brand = document.querySelector("#floatingBrand");
const description = document.querySelector("#floatingTextarea");
const price = document.querySelector("#floatingPrice");
const idInput = document.querySelector("#id");

(async function () {
  try {
    const response = await fetch(url);
    const details = await response.json();

    title.value = details.title;
    brand.value = details.brand;
    description.value = details.description;
    price.value = details.price;
    idInput.value = details.id;

    deleteButton(details.id);

    console.log(details);
  } catch (error) {
    console.log(error);
  }
})();

editForm.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const titleValue = title.value.trim();
  const brandValue = brand.value.trim();
  const descriptionValue = description.value.trim();
  const priceValue = parseFloat(price.value);
  const idValue = idInput.value;

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

  updateProduct(titleValue, brandValue, descriptionValue, priceValue, idValue);
}

async function updateProduct(title, brand, description, price, id) {
  const data = JSON.stringify({
    title: title,
    brand: brand,
    description: description,
    price: price,
  });

  const options = {
    method: "PUT",
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

    if (json.updated_at) {
      //Change to displayMessage();
      console.log("ya did it bitch");
    }

    if (json.error) {
      //Change to displayMessage();
      console.log("Fail");
    }
  } catch (error) {
    console.log(error);
  }
}
