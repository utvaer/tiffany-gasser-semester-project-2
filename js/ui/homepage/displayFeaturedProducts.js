export function displayFeaturedProducts(products) {
  const featuredContainer = document.querySelector(".row");

  for (let i = 0; i < products.length; i++) {
    if (!products[i].featured) {
      continue;
    }
    featuredContainer.innerHTML = `<h3>${products[i].title}</h3>`;
  }
}

//OBS transfer results to carousel?
