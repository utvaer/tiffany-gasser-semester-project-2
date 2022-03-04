import { displayNav } from "./ui/common/displayNav.js";
import { retrieveCartItems } from "./utils/cartItemsStorage.js";
import { displayMessage } from "./components/common/displayMessage.js";

// Display Main Nav
displayNav();

// Display Items in Bag

const cartItems = retrieveCartItems();
const cartItemsContainer = document.querySelector(".cart-items-container");
const costOverview = document.querySelector(".cost-overview");
let total = 0;

if (cartItems.length === 0) {
  displayMessage("no items in cart", ".message");
}

cartItems.forEach((item) => {
  let productTotal = parseInt(item.price) * item.qty;
  console.log(productTotal);
  total += productTotal;
  console.log(item.price);
  cartItemsContainer.innerHTML += `<div class="row cart-products">
                                    <div class="col-xs-6 col-sm-4">
                                        <img src="${
                                          item.image
                                        }" class="rounded cart-img"></img>
                                    </div>
                                    <div class="col-xs-6 col-sm-4">
                                        <h5>${item.title}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">USD ${
                                          item.price
                                        }</h6>
                                        <a href="productpage.html?id=${
                                          item.id
                                        }">Back to product details</a>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <div class="quantity">
                                            <i class="ri-arrow-left-s-line"></i>
                                            <span>${item.qty}</span>
                                            <i class="ri-arrow-right-s-line"></i>
                                        </div>
                                        <div class="total">
                                            ${item.qty * item.price}
                                        </div>
                                    </div>
                                    <div class="col-1">
                                        <i class="ri-close-line"></i>
                                    </div>
                                    <hr/>
                                </div>`;
});

costOverview.innerHTML = `<div>
                            <p>Total: ${total}<p>
                            <p>*Additional costs might occur.<p>
                            <a href="/" class="btn btn-primary" role="button">Proceed to Checkout</a>
                        </div>`;
