import { displayNav } from "./ui/common/displayNav.js";
import { retrieveCartItems } from "./utils/cartItemsStorage.js";
import { displayMessage } from "./components/common/displayMessage.js";

// Display Main Nav
displayNav();

// Display Items in Bag

export const cartItems = retrieveCartItems();
const cartItemsContainer = document.querySelector(".cart-items-container");

if (cartItems.length === 0) {
  displayMessage("no items in cart", ".message");
}

cartItems.forEach((item) => {
  cartItemsContainer.innerHTML += `<div>
        <img src="${item.image}" class="rounded float-start cart-img"></img>
        <h4>${item.title}</h4>
        <p>${item.price}</p>
    </div>`;
});
