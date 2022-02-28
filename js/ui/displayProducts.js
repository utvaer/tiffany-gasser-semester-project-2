import { addEditBtn } from "./products/addEditBtn.js";

export function displayProducts(json) {
  const products = document.querySelector(".row");
  products.innerHTML = "";

  for (let i = 0; i < json.length; i++) {
    products.innerHTML += `<div class="col-sm-6">
                            <a href="productpage.html?id=${json[i].id}" class="card" style="width: 18rem;">
                              <img src="${json[i].image.formats.small.url}" class="card-img-top" alt="${json[i].image_alt}"></img>
                              <div class="card-body">
                                <h5 class="card-title">${json[i].title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">USD ${json[i].price}</h6>
                                <p class="card-text">${json[i].brand}</p>
                              </div>
                              </a>
                              <button class="add-bag-btn">Add to Bag</button>
                              <div class="edit-btn"></div>
                          </div>`;
  }
  const editBtn = document.querySelectorAll(".edit-btn");
  addEditBtn(editBtn, json);
  console.log(editBtn);
}
