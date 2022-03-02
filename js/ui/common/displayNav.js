import { getUsername } from "../../utils/storage.js";
import logoutBtn from "./logoutBtn.js";

export function displayNav() {
  const { pathname } = document.location;
  const username = getUsername();

  let authLink = `<a href="login.html" class="nav-link ${
    pathname === "/login.html" ? "active" : ""
  }"><i class="ri-user-line"></i></a>`;

  if (username) {
    authLink = `<a href="add.html" id="logout" class="nav-link">
                  <i class="ri-logout-circle-r-line"></i>
                  <span>${username}</span>
                </a>`;
  }

  const navbar = document.querySelector(".navbar");
  navbar.innerHTML = `<div class="container-fluid">
                        <a class="navbar-brand ${
                          pathname === "/" || pathname === "/index.html"
                            ? "active"
                            : ""
                        }" href="index.html">Urban</br> Feet</a>
                        <button
                          class="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                              <a class="nav-link ${
                                pathname === "/products.html" ? "active" : ""
                              }" aria-current="page" href="products.html"
                                >Products</a
                              >
                            </li>

                            <li class="nav-item">
                              <a class="nav-link ${
                                pathname === "/cart.html" ? "active" : ""
                              }" href="cart.html"
                                ><i class="ri-shopping-bag-fill"></i
                              ><span>0</span></a>
                            </li>

                            <li class="nav-item">
                              ${authLink}
                            </li>
                          </ul>
                        </div>
                      </div>`;
  logoutBtn();
}
