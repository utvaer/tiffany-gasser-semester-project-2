// Unsure if this is the way to go, seems too complicated
//Currently only applied to cart.html

function displayNav() {
  const { pathname } = document.location;
  console.log(pathname);

  const navbar = document.querySelector(".navbar");
  navbar.innerHTML = `<div class="container-fluid">
          <a class="navbar-brand" href="index.html">Urban Feet</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="products.html"
                  >Products</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="cart.html"
                  ><i class="ri-shopping-bag-fill"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login.html">Sign In</a>
              </li>
            </ul>
          </div>
        </div>`;
}

displayNav();