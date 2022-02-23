import { clearStorage } from "../../utils/storage.js";

export default function logoutBtn() {
  const logout = document.querySelector("#logout");
  if (logout) {
    logout.onclick = function () {
      const doLogout = confirm("Are you sure you want to log out?");
      if (doLogout) {
        clearStorage();
        //next line can be added in storage file in the function directly, try
        location.href = "/";
      }
    };
  }
}
