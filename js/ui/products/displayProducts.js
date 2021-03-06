import { addEditBtn } from "./admin/addEditBtn.js";

export function displayProducts(json) {
  const products = document.querySelector(".row");
  products.innerHTML = "";

  for (let i = 0; i < json.length; i++) {
    const productId = json[i].id;
    const productTitle = json[i].title;
    const productImg = json[i].image.formats.small.url;

    products.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3 product-card">
                            <a href="productpage.html?id=${productId}" class="card">
                              <img src="${productImg}" class="card-img-top" alt="${json[i].image_alt}"></img>
                              <div class="card-body">
                                <h5 class="card-title">${productTitle}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">USD ${json[i].price}</h6>
                                <p class="card-text">${json[i].brand}</p>
                              </div>
                              </a>
                              <a href="productpage.html?id=${productId}" class="btn btn-primary details-btn" role="button">More Info</a>
                              <div class="edit"></div>
                          </div>`;
  }
  const editBtn = document.querySelectorAll(".edit");
  addEditBtn(editBtn, json);
}
