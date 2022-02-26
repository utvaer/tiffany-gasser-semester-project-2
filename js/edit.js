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

// Select parameters
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
const featured = document.querySelector("#flexCheckDefault");
const image = document.querySelector("#inputGroupFile02");
const imageAlt = document.querySelector("#floatingAlt");
const style = document.querySelectorAll('input[name="exampleRadios"]');

(async function () {
  try {
    const response = await fetch(url);
    const details = await response.json();

    title.value = details.title;
    brand.value = details.brand;
    description.value = details.description;
    price.value = details.price;
    idInput.value = details.id;
    featured.value = details.featured;
    //IMG display not working
    image.file = details.image.url;
    imageAlt.value = details.image_alt;
    //STyle selection not working
    style.checked = details.style;

    deleteButton(details.id);

    console.log(details);
  } catch (error) {
    console.log(error);
  }
})();

//Submit Form
editForm.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const titleValue = title.value.trim();
  const brandValue = brand.value.trim();
  const descriptionValue = description.value.trim();
  const priceValue = parseFloat(price.value);
  const idValue = idInput.value;
  const imageValue = image.files[0];
  const imageAltValue = imageAlt.value.trim();
  const styleValue = document.querySelector(
    'input[name="exampleRadios"]:checked'
  ).value;

  if (
    titleValue.length === 0 ||
    brandValue.length === 0 ||
    descriptionValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    imageAltValue.length === 0
  ) {
    //Change to form validation: return displayMessage();
    console.log("give me somethinnnnnn");
  }

  updateProduct(
    titleValue,
    brandValue,
    descriptionValue,
    priceValue,
    idValue,
    imageAltValue,
    styleValue,
    featured.checked,
    imageValue
  );
}

async function updateProduct(
  title,
  brand,
  description,
  price,
  id,
  imageAlt,
  style,
  featured,
  image
) {
  const data = {
    title: title,
    brand: brand,
    description: description,
    price: price,
    image_alt: imageAlt,
    style: style,
    featured: featured,
  };

  const formData = new FormData();
  formData.append("files.image", image, image.name);
  formData.append("data", JSON.stringify(data));
  const options = {
    method: "PUT",
    body: formData,
    headers: {
      //"Content-Type": "application/json",
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
      document.location.href = "/products.html";
    }

    if (json.error) {
      //Change to displayMessage();
      console.log("Fail");
    }
  } catch (error) {
    console.log(error);
  }
}
