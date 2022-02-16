export function displayProducts(json) {
  const products = document.querySelector(".products-container");

  json.forEach((product) => {
    products.innerHTML += `<div>
                            <h4>${product.title}</h4>
                            <img src="${product.image.formats.small.url}" alt="${product.image_alt}">
                            <p>USD ${product.price}</p>
                            <p>Brand ${product.brand}</p>
                            <p>${product.description}</p>
                        </div>`;
  });
}
