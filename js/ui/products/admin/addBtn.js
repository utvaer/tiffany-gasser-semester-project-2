export function addAdminAccess() {
  const addBtnContainer = document.querySelector(".admin-access-btn");
  const addPageTitle = document.querySelector(".admin-access-edit");

  addBtnContainer.innerHTML = `<a class="btn btn-primary add-product" href="add.html" role="button">Add New Product</a>`;
  addPageTitle.innerHTML = `<h2>Edit Products<h2>`;
}
