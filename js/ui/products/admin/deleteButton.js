import { baseUrl } from "../../../settings/api.js";
import { getToken } from "../../../utils/storage.js";

export function deleteButton(id) {
  const btnContainer = document.querySelector(".delete-btn-container");
  btnContainer.innerHTML = `<button class="delete" type="button">Delete</button>`;

  const deleteBtn = document.querySelector("button.delete");
  deleteBtn.onclick = async function () {
    console.log(id);

    const confirmDelete = confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      const url = baseUrl + "products/" + id;
      const token = getToken();
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();

        location.href = "/";

        console.log(json);
      } catch (error) {
        console.log(error);
      }
    }
  };
}
