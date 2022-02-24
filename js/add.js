import { displayNav } from "./ui/common/displayNav.js";
import { baseUrl } from "./settings/api.js";
import { getToken } from "./utils/storage.js";

// Check is logged in or not
const token = getToken();
if (!token) {
  location.href = "/";
}

// Display Main Nav
displayNav();

// Select Form Inputs
const productForm = document.querySelector("#new-products-form");
const title = document.querySelector("#floatingInput");
const brand = document.querySelector("#floatingBrand");
const description = document.querySelector("#floatingTextarea");
const price = document.querySelector("#floatingPrice");
const featured = document.querySelector("#flexCheckDefault");
const image = document.querySelector("#inputGroupFile02");
const imageAlt = document.querySelector("#floatingAlt");

//OBS NEED TO ADD IMAGE

// Submit Form
productForm.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const titleValue = title.value.trim();
  const brandValue = brand.value.trim();
  const descriptionValue = description.value.trim();
  const priceValue = parseFloat(price.value);
  const imageValue = image.value;
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

  addProduct(
    titleValue,
    brandValue,
    descriptionValue,
    priceValue,
    featured.checked,
    imageAltValue,
    styleValue,
    imageValue
  );
}

async function addProduct(
  title,
  brand,
  description,
  price,
  featured,
  imageAlt,
  styleValue,
  image
) {
  const url = baseUrl + "products";
  const data = {
    title: title,
    brand: brand,
    description: description,
    price: price,
    featured: featured,
    image_alt: imageAlt,
    style: styleValue,
  };
  //UPLOAD IMAGE BAD REQUEST 400
  const formData = new FormData();
  formData.append("files.image", image);
  formData.append("data", JSON.stringify(data));
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
    //console.log(json);

    if (json.created_at) {
      //Change to display message
      console.log("you did it!");
      productForm.reset();
    }
  } catch (error) {
    //Change to display message
    console.log(error);
  }
}
