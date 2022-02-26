export default function displayMessage(message, targetElement) {
  const element = document.querySelector(targetElement);
  element.innerHTML = `<div class="message">${message}</div>`;
}
