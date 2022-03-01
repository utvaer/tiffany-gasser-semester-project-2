export function addAdminAccess() {
  const addBtnContainer = document.querySelector(".admin-access-btn");
  const addPageTitle = document.querySelector(".admin-access-edit");

  addBtnContainer.innerHTML = `<a class="btn btn-primary" href="add.html" role="button">Add New Product</a>`;
  addPageTitle.innerHTML = `<h2>Edit Products<h2>`;

  /*const addBtn = document.querySelector("button.add");
  addBtn.onclick = function () {
    location.href = "add.html";
  };*/
}
