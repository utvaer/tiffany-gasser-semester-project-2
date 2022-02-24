export function addProductBtn() {
  const addBtnContainer = document.querySelector(".admin-access-btn");
  addBtnContainer.innerHTML = `<button class="add">Add New Product</button>`;

  const addBtn = document.querySelector("button.add");
  addBtn.onclick = function () {
    const addForm = document.querySelector(".admin-access-add-product-form");
    addForm.innerHTML = `<p>heya</p>`;
  };
}
