import { retrieveCartItems, saveCartItems } from "../utils/cartItemsStorage.js";

export function addToBag(details) {
  console.log(details);

  const currentBag = retrieveCartItems();

  for (let i = 0; currentBag.length; i++) {
    const productExists = currentBag.find(function (details) {
      return details.id === id;
    });
    if (currentBag[i].id === details.id) {
      currentBag[i].qty += 1;
      saveCartItems(currentBag);
    }
    if (!productExists) {
      currentBag[i].qty = 1;
      currentBag.push(details);
      saveCartItems(currentBag);
    }
  }
  /*if (!productInBag) {
    details.qty = 1;
    currentBag.push(details);
    saveCartItems(currentBag);
  }*/
}
