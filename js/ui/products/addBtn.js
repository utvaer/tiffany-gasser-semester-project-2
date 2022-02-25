export function addAdminAccess() {
  const addBtnContainer = document.querySelector(".admin-access-btn");
  const addPageTitle = document.querySelector(".admin-access-edit");
  addBtnContainer.innerHTML = `<button class="add">Add New Product</button>`;
  addPageTitle.innerHTML = `<h2>Edit Products<h2>`;

  const addBtn = document.querySelector("button.add");
  addBtn.onclick = function () {
    location.href = "add.html";
  };
}

// Form added in products page, did not work in addBtn.onclick
/*const addForm = document.querySelector(".admin-access-add-product-form");
    addForm.innerHTML = `<h2>Add new product</h2>

      <!--Add New Product Form-->
      <form id="new-products-form">
        <!--Product Title-->
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Title"
          />
          <label for="floatingInput">Title</label>
        </div>

        <!--Product Brand-->
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingBrand"
            placeholder="Brand"
          />
          <label for="floatingBrand">Brand</label>
        </div>

        <!--Product Description-->
        <div class="form-floating">
          <textarea
            class="form-control mb-3"
            placeholder="Product description"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Product description</label>
        </div>

        <!--Product Price-->
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            id="floatingPrice"
            placeholder="Price"
          />
          <label for="floatingPrice">Price USD</label>
        </div>

        <!--Upload Image-->
        <div class="input-group mb-3">
          <input type="file" class="form-control" id="inputGroupFile02" />
          <label class="input-group-text" for="inputGroupFile02">Upload</label>
        </div>

        <!--Add Image Alt Text-->
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingAlt"
            placeholder="Image Alt Text"
          />
          <label for="floatingBrand">Image Alt Text</label>
        </div>

        <!--Style Selection-->
        <div>
          <label>Style</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="Unisex"
            />
            <label class="form-check-label" for="exampleRadios1">
              Unisex
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="Women"
            />
            <label class="form-check-label" for="exampleRadios2"> Women </label>
          </div>
          <div class="form-check mb-3">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="Men"
            />
            <label class="form-check-label" for="exampleRadios3"> Men </label>
          </div>
        </div>

        <!--Product Featured-->
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Featured Product
          </label>
        </div>

        <button type="submit" class="btn btn-primary">Primary</button>
      </form>`;*/
