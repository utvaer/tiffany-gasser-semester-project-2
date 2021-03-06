import { displayNav } from "../ui/common/displayNav.js";
import { baseUrl } from "../settings/api.js";
import { getToken } from "../utils/storage.js";
import { deleteButton } from "../ui/products/admin/deleteButton.js";
import { displayMessage } from "../components/common/displayMessage.js";

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
const editBtn = document.querySelector(".edit");

(async function () {
  try {
    const response = await fetch(url);
    const details = await response.json();

    //Display page title
    document.title = `Urban Feet | Edit ${details.title}`;

    //Display Product to Edit
    title.value = details.title;
    brand.value = details.brand;
    description.value = details.description;
    price.value = details.price;
    idInput.value = details.id;
    //Featured not working
    featured.checked = details.featured;
    //IMG display not working
    image.file = details.image.url;
    imageAlt.value = details.image_alt;
    //Style selection not working
    style.checked = details.style;

    //Display Delete Button
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
  editBtn.innerHTML = `<button class="btn btn-primary" type="button" disabled>
                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                        Updating...
                      </button>`;

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

  /*if (
    titleValue.length === 0 ||
    brandValue.length === 0 ||
    descriptionValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    imageAltValue.length === 0
  ) {
    //Change to form validation: return displayMessage();
    console.log("give me somethinnnnnn");
  }*/

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

// Update Product Information

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
      alert("This product was successfully edited in our system.");
      document.location.href = "/products.html";
    }

    if (json.error) {
      console.log(error);
      displayMessage(
        "An error has occurred on our part, please try again later.",
        ".message"
      );
    }
  } catch (error) {
    console.log(error);
  }
}
