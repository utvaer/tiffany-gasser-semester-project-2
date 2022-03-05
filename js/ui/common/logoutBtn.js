import { clearStorage } from "../../utils/storage.js";

export default function logoutBtn() {
  const logout = document.querySelector("#logout");
  if (logout) {
    logout.onclick = function () {
      const doLogout = confirm("Are you sure you want to log out?");
      if (doLogout) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        location.href = "/";
      }
    };
  }
}
