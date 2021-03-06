import { displayNav } from "../ui/common/displayNav.js";
import { retrieveCartItems } from "../utils/cartItemsStorage.js";
import { displayMessage } from "../components/common/displayMessage.js";

// Display Main Nav
displayNav();

// Display Items in Bag

const cartItems = retrieveCartItems();
const cartItemsContainer = document.querySelector(".cart-items-container");
const costOverview = document.querySelector(".cost-overview");
const clearCart = document.querySelector(".danger-btn");
let total = 0;

if (cartItems.length === 0) {
  displayMessage(
    "You currently have no items in your shopping bag.",
    ".message"
  );
  clearCart.style.display = "none";
}

// Display Items in Shopping Bag
cartItems.forEach((item) => {
  let productTotal = parseInt(item.price) * item.qty;
  console.log(productTotal);
  total += productTotal;
  console.log(item.price);
  cartItemsContainer.innerHTML += `<div class="row cart-products">
                                    <div class="col-sm-2">
                                      <a href="productpage.html?id=${
                                        item.id
                                      }"> <..product details</a>
                                    </div>
                                    <div class="col-sm-3">
                                      <img src="${
                                        item.image
                                      }" class="rounded cart-img"></img>
                                    </div>
                                    <div class="col-sm-3">
                                      <h5>${item.title}</h5>
                                      <h6 class="card-subtitle mb-2 text-muted">$${
                                        item.price
                                      },00</h6>
                                    </div>
                                    <div class="col-sm-2">
                                        <div class="quantity">
                                          <h6>Amount:</h6>
                                          <span>X ${item.qty}</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-2">
                                        <div class="total">
                                          <h6>Total:</h6>
                                          <p>$${item.qty * item.price},00</p>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>`;
});

// Display Total Cost
costOverview.innerHTML = `<div>
                            <p>Total: $${total},00<p>
                            <p>*Additional costs might occur.<p>
                            <a href="/" class="btn btn-primary" role="button">Proceed to Checkout</a>
                        </div>`;

// Clear Shopping Bag
if (clearCart) {
  clearCart.onclick = function () {
    const RemoveItems = confirm(
      "Are you sure you want to remove all products from your shopping bag?"
    );
    if (RemoveItems) {
      localStorage.removeItem("cartItems");
    }
  };
}
