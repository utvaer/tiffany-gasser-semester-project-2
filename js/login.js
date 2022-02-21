import { baseUrl } from "./settings/api.js";
import { saveToken, saveUser } from "./utils/storage.js";

const message = document.querySelector(".message-container");
const form = document.querySelector("form");
const username = document.querySelector("#floatingUsername");
const email = document.querySelector("#floatingInput");
const password = document.querySelector("#floatingPassword");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  message.innerHTML = "";

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (
    usernameValue.length === 0 ||
    emailValue.length === 0 ||
    passwordValue === 0
  ) {
    message.innerHTML = "we need something you know";
  }

  completeLogin(usernameValue, emailValue, passwordValue);
}

async function completeLogin(username, email, password) {
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

      location.href = "/products.html";
    }
    if (json.error) {
      message.innerHTML = "incorrect log in details";
    }
  } catch (error) {
    console.log(error);
  }
}

/*function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}*/
