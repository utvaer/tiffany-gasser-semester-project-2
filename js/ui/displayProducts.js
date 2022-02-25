import { getToken } from "../utils/storage.js";

export function displayProducts(json) {
  const products = document.querySelector(".row");

  json.forEach((product) => {
    products.innerHTML += `<div class="col-sm-6">
                            <a href="productpage.html?id=${product.id}" class="card" style="width: 18rem;">
                              <img src="${product.image.formats.small.url}" class="card-img-top" alt="${product.image_alt}"></img>
                              <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">USD ${product.price}</h6>
                                <p class="card-text">${product.brand}</p>
                              </div>
                              <button class="add-bag-btn">Add to Bag</button>
                              <a class="btn btn-primary edit-btn" href="edit.html?id=${product.id}" role="button">Edit Product</a>
                            </a>
                          </div>`;
  });
}

//hide btn
//const editBtn = document.querySelectorAll("a.edit-btn");
//console.log(editBtn);
//editBtn.style.display = "none";
