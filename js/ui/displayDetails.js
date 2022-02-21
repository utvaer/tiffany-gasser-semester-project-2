const page = document.querySelector(".page");
const product = document.querySelector(".product-detail");

export function displayDetails(details) {
  document.title = `${details.title}`;
  page.innerHTML = `${details.title}`;
  product.innerHTML = `<div>
                        <h1>${details.title}</h1>
                        <img src="${details.image.formats.large.url}" class="card-img-top" alt="${details.image_alt}">
                        <p>USD ${details.price}</h6>
                        <p>Brand ${details.brand}</p>
                        <p>${details.description}</p>
                       </div> `;
}
