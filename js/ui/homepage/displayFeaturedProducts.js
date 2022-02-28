export function displayFeaturedProducts(products) {
  const featuredContainer = document.querySelector(".row");

  for (let i = 0; i < products.length; i++) {
    if (!products[i].featured) {
      continue;
    }
    featuredContainer.innerHTML += `<div class="col-sm-6">
                            <a href="productpage.html?id=${products[i].id}" class="card" style="width: 18rem;">
                              <img src="${products[i].image.formats.small.url}" class="card-img-top" alt="${products[i].image_alt}"></img>
                              <div class="card-body">
                                <h5 class="card-title">${products[i].title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">USD ${products[i].price}</h6>
                                <p class="card-text">${products[i].brand}</p>
                              </div>                              
                            </a>
                            <button class="add-bag-btn">Add to Bag</button>
                          </div>`;
  }
}

//OBS transfer results to carousel?
