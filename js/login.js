import { displayNav } from "./ui/common/displayNav.js";
import { baseUrl } from "./settings/api.js";
import { saveToken, saveUser, getToken } from "./utils/storage.js";
import { displayMessage } from "./components/common/displayMessage.js";

const token = getToken();
if (token) {
  location.href = "/";
}

const message = document.querySelector(".message-container");
const form = document.querySelector(".login-form");
const username = document.querySelector("#floatingInput");
const password = document.querySelector("#floatingPassword");

// Display Main Nav
displayNav();

// Submit Log In Form
form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  message.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  //might be redundant
  if (usernameValue.length === 0 || passwordValue === 0) {
    displayMessage(error, "Incorrect credentials", message);
    message.innerHTML = "we need something you know";
  }

  completeLogin(usernameValue, passwordValue);
}

// Check Log In Form
async function completeLogin(username, password) {
  const url = baseUrl + "auth/local";
  const data = JSON.stringify({ identifier: username, password: password });
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);

      location.href = "/index.html";
    }
    if (json.error) {
      displayMessage(
        "Incorrect credentials, please try again",
        ".message-container"
      );
    }
  } catch (error) {
    console.log(error);
  }
}
