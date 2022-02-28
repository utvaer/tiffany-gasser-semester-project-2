import { getToken } from "../../utils/storage.js";

export function addEditBtn(editBtn, json) {
  console.log(json);
  const token = getToken();
  if (token) {
    for (let i = 0; i < editBtn.length; i++) {
      editBtn[
        i
      ].innerHTML += `<a class="btn btn-primary edit-btn" href="edit.html?id=${json[i].id}" role="button">Edit Product</a>`;
    }
  }
}
