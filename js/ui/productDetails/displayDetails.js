const page = document.querySelector(".page");
const product = document.querySelector(".product-detail");

export function displayDetails(details) {
  document.title = `${details.title}`;
  page.innerHTML = `${details.title}`;
  const image = details.image.formats.large.url;
  product.innerHTML = `<div class="row">
                        <div class="col-xs-12 col-sm-6">
                          <img src="${image}" class="card-img-top details-img" alt="${details.image_alt}">
                        </div>
                        <div class="col-xs-12 col-sm-6">
                          <h1>${details.title}</h1>
                          <p>${details.brand}</p>
                          <p>${details.description}</p>
                          <h6 class="card-subtitle mb-2 text-muted">USD ${details.price}</h6>
                          <button class="btn btn-primary add-bag-btn add" data-id="${details.id}" data-title="${details.title}"
                          data-price="${details.price}"
                          data-img="${image}">Add to Bag</button>
                        </div>
                      </div>`;
}
