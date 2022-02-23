import { displayNav } from "./ui/common/displayNav.js";
import { baseUrl } from "./settings/api.js";
import { displayDetails } from "./ui/displayDetails.js";

// Display Main Nav
displayNav();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = baseUrl + "products/" + id;

if (!id) {
  document.location.href = "/";
}

// Display Product Information
(async function getDetails() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    displayDetails(details);
  } catch (error) {
    console.log(error);
  }
})();
