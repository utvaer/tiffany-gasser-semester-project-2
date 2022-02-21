import { baseUrl } from "./settings/api.js";

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
    usernameValue.length > 3 ||
    emailValue.length === 0 ||
    passwordValue === 0
  ) {
    console.log("error, give me something");
  }

  completeLogin(usernameValue, emailValue, passwordValue);
}

function completeLogin(username, email, password) {
  const url = baseUrl + "auth/local";
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
