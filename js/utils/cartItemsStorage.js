export function retrieveCartItems() {
  const items = localStorage.getItem("cartItems");

  if (!items) {
    return [];
  } else {
    return JSON.parse(items);
  }
}

export function saveCartItems(items) {
  localStorage.setItem("cartItems", JSON.stringify(items));
}

//TO DELETE
/*let amountDisplay = document.querySelector(".cart span");
const addBagBtn = document.querySelector(".add-bag-btn");

addBagBtn.onclick = (item) => {
  itemsAdded(item);
};
function itemsAdded() {
  let sneakersAdded = localStorage.getItem("sneakers");
  sneakersAdded = parseInt(sneakersAdded);

  if (sneakersAdded) {
    localStorage.setItem("sneakers", sneakersAdded + 1);
    amountDisplay.textContent = sneakersAdded + 1;
  } else {
    localStorage.setItem("sneakers", 1);
    amountDisplay.textContent = 1;
  }
  //setItems(json);
}

//add to bag
let amountDisplay = document.querySelector(".cart span");

const shoppingBag = [
  {
    productId: 1,
    quantity: 0,
  },
];

function addToBag(json) {
  let addBagBtn = document.querySelector(".add-bag-btn");

  for (let i = 0; i < addBagBtn.length; i++) {
    addBagBtn[i].addEventListener("click", () => {
      console.log("added to cart");
      itemsAdded(json[i]);
    });
  }
}

function ProductsinBag() {
  let sneakersAdded = localStorage.getItem("sneakers");

  if (sneakersAdded) {
    amountDisplay.textContent = sneakersAdded;
  }
}

function itemsAdded(json) {
  let sneakersAdded = localStorage.getItem("sneakers");
  sneakersAdded = parseInt(sneakersAdded);

  if (sneakersAdded) {
    localStorage.setItem("sneakers", sneakersAdded + 1);
    amountDisplay.textContent = sneakersAdded + 1;
  } else {
    localStorage.setItem("sneakers", 1);
    amountDisplay.textContent = 1;
  }
  //setItems(json);
}

function setItems(json) {
  let cartItems = localStorage.getItem("productsInBag");
  cartItems = JSON.parse(cartItems);
  console.log("my cartItems are", cartItems);
  if (cartItems != null) {
    if (cartItems[json] === undefined) {
      cartItems = {
        ...cartItems,
        [json[i].title]: json,
      };
      cartItems[json].qty += 1;
    } else {
      json.qty = 1;
      cartItems = {
        [json[i].title]: json,
      };
    }
  }

  localStorage.setItem("productsInBag", JSON.stringify(json));
}
ProductsinBag();*/
