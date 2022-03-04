import { retrieveCartItems, saveCartItems } from "../utils/cartItemsStorage.js";

export function addToBag() {
  const id = this.dataset.id;
  const title = this.dataset.title;
  const price = this.dataset.price;
  const image = this.dataset.img;

  const currentItems = retrieveCartItems();

  const itemInBag = currentItems.find(function (product) {
    return product.id === id;
  });

  const itemAdd = {
    id: id,
    title: title,
    price: price,
    image: image,
    qty: 1,
  };

  if (!itemInBag) {
    currentItems.push(itemAdd);
    saveCartItems(currentItems);
  } else {
    for (let i = 0; i < currentItems.length; i++) {
      if (itemAdd.id === itemInBag.id) {
        currentItems[i].qty += 1;
        //itemInBag.qty
        saveCartItems(currentItems);
      }
    }
  }
  console.log(typeof price);
}
