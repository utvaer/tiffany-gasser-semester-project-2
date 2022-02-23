export function displayProducts(json) {
  const products = document.querySelector(".row");

  json.forEach((product) => {
    products.innerHTML += `<div class="col-sm-6">
                            <a href="edit.html?id=${product.id}" class="card" style="width: 18rem;">
                              <img src="${product.image.formats.small.url}" class="card-img-top" alt="${product.image_alt}">
                              <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">USD ${product.price}</h6>
                                <p class="card-text">Brand ${product.brand}</p>
                              </div>
                              <button>Add to Bag</button>
                            </a>
                          </div>`;
  });
}
