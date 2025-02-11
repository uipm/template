<template>
  <h3 class="fs-20 fw-medium mb-4">Categories</h3>
  <ul
    class="nav nav-tabs border-0 mb-4 gap-3 categories-tabs"
    id="myTab"
    role="tablist"
  >
    <li class="nav-item" role="presentation">
      <button
        class="nav-link border-2 bg-transparent rounded-3 active"
        style="width: 125px; padding: 20px; padding-bottom: 16px"
        id="all-tab"
        data-bs-toggle="tab"
        data-bs-target="#all-tab-pane"
        type="button"
        role="tab"
        aria-controls="all-tab-pane"
        aria-selected="true"
      >
        <img src="@/assets/images/all-icon.svg" class="mb-3" alt="all-icon" />
        <h4 class="fs-16 fw-medium d-block mb-0">All</h4>
        <span class="fs-12 fw-medium text-body">
          450
          <span class="d-none">Products</span>
        </span>
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link border-2 bg-transparent rounded-3"
        style="width: 125px; padding: 20px; padding-bottom: 16px"
        id="electronics-tab"
        data-bs-toggle="tab"
        data-bs-target="#electronics-tab-pane"
        type="button"
        role="tab"
        aria-controls="electronics-tab-pane"
        aria-selected="false"
      >
        <img
          src="@/assets/images/electronics-icon2.svg"
          class="mb-3"
          alt="electronics-icon"
        />
        <h4 class="fs-16 fw-medium d-block mb-0">Electronics</h4>
        <span class="fs-12 fw-medium text-body">
          45
          <span class="d-none">Products</span>
        </span>
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link border-2 bg-transparent rounded-3"
        style="width: 125px; padding: 20px; padding-bottom: 16px"
        id="clothing-tab"
        data-bs-toggle="tab"
        data-bs-target="#clothing-tab-pane"
        type="button"
        role="tab"
        aria-controls="clothing-tab-pane"
        aria-selected="false"
      >
        <img
          src="@/assets/images/clothing-icon2.svg"
          class="mb-3"
          alt="clothing-icon2"
        />
        <h4 class="fs-16 fw-medium d-block mb-0">Clothing</h4>
        <span class="fs-12 fw-medium text-body">
          29
          <span class="d-none">Products</span>
        </span>
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link border-2 bg-transparent rounded-3"
        style="width: 125px; padding: 20px; padding-bottom: 16px"
        id="beauty-tab"
        data-bs-toggle="tab"
        data-bs-target="#beauty-tab-pane"
        type="button"
        role="tab"
        aria-controls="beauty-tab-pane"
        aria-selected="false"
      >
        <img
          src="@/assets/images/beauty-icon.svg"
          class="mb-3"
          alt="beauty-icon"
        />
        <h4 class="fs-16 fw-medium d-block mb-0">Beauty</h4>
        <span class="fs-12 fw-medium text-body">
          34
          <span class="d-none">Products</span>
        </span>
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link border-2 bg-transparent rounded-3"
        style="width: 125px; padding: 20px; padding-bottom: 16px"
        id="foods-tab"
        data-bs-toggle="tab"
        data-bs-target="#foods-tab-pane"
        type="button"
        role="tab"
        aria-controls="foods-tab-pane"
        aria-selected="false"
      >
        <img
          src="@/assets/images/foods-icon.svg"
          class="mb-3"
          alt="foods-icon"
        />
        <h4 class="fs-16 fw-medium d-block mb-0">Foods</h4>
        <span class="fs-12 fw-medium text-body">
          18
          <span class="d-none">Products</span>
        </span>
      </button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="all-tab-pane"
      role="tabpanel"
      aria-labelledby="all-tab"
      tabindex="0"
    >
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-36.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Apple iPhone 16</h3>
                <span class="text-body">Smartphones</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$799</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-37.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Levi's 501</h3>
                <span class="text-body">Pants</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$89</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-38.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Maybelline Lash</h3>
                <span class="text-body">Makeup</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$29</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-39.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Quaker Oats</h3>
                <span class="text-body">Breakfast</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$99</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-40.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Fitbit Charge</h3>
                <span class="text-body">Wearables</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$179</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-41.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Adidas Women</h3>
                <span class="text-body">Outerwear</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$85</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-42.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Galaxy Tab</h3>
                <span class="text-body">Tablets</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$649</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-43.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">H&M Basic</h3>
                <span class="text-body">T-Shirts</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$20</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-44.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">L'Oréal Paris</h3>
                <span class="text-body">Makeup</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$69</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap custom-shadow for-dark-rounded-bg rounded-3 border bg-white px-4 mb-4"
        style="padding-top: 11px; padding-bottom: 11px"
      >
        <span class="fs-12 fw-medium">Showing 9 of 30 Results</span>

        <nav aria-label="Page navigation example">
          <ul class="pagination mb-0 justify-content-center">
            <li class="page-item">
              <button class="page-link icon hover-bg" aria-label="Previous">
                <i class="material-symbols-outlined">keyboard_arrow_left</i>
              </button>
            </li>
            <li class="page-item">
              <button class="page-link active">1</button>
            </li>
            <li class="page-item">
              <button class="page-link">2</button>
            </li>
            <li class="page-item">
              <button class="page-link">3</button>
            </li>
            <li class="page-item"><a class="page-link">4</a></li>
            <li class="page-item">
              <button class="page-link icon hover-bg" aria-label="Next">
                <i class="material-symbols-outlined">keyboard_arrow_right</i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      class="tab-pane fade"
      id="electronics-tab-pane"
      role="tabpanel"
      aria-labelledby="electronics-tab"
      tabindex="0"
    >
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-40.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Fitbit Charge</h3>
                <span class="text-body">Wearables</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$179</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-36.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Apple iPhone 16</h3>
                <span class="text-body">Smartphones</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$799</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-42.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Galaxy Tab</h3>
                <span class="text-body">Tablets</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$649</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-37.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Levi's 501</h3>
                <span class="text-body">Pants</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$89</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-41.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Adidas Women</h3>
                <span class="text-body">Outerwear</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$85</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-43.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">H&M Basic</h3>
                <span class="text-body">T-Shirts</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$20</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap custom-shadow for-dark-rounded-bg rounded-3 border bg-white px-4 mb-4"
        style="padding-top: 11px; padding-bottom: 11px"
      >
        <span class="fs-12 fw-medium">Showing 3 of 30 Results</span>

        <nav aria-label="Page navigation example">
          <ul class="pagination mb-0 justify-content-center">
            <li class="page-item">
              <button class="page-link icon hover-bg" aria-label="Previous">
                <i class="material-symbols-outlined">keyboard_arrow_left</i>
              </button>
            </li>
            <li class="page-item">
              <button class="page-link active">1</button>
            </li>
            <li class="page-item">
              <button class="page-link">2</button>
            </li>
            <li class="page-item">
              <button class="page-link">3</button>
            </li>
            <li class="page-item"><a class="page-link">4</a></li>
            <li class="page-item">
              <button class="page-link icon hover-bg" aria-label="Next">
                <i class="material-symbols-outlined">keyboard_arrow_right</i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      class="tab-pane fade"
      id="clothing-tab-pane"
      role="tabpanel"
      aria-labelledby="clothing-tab"
      tabindex="0"
    >
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-37.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Levi's 501</h3>
                <span class="text-body">Pants</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$89</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-41.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Adidas Women</h3>
                <span class="text-body">Outerwear</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$85</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-43.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">H&M Basic</h3>
                <span class="text-body">T-Shirts</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$20</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-36.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Apple iPhone 16</h3>
                <span class="text-body">Smartphones</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$799</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-40.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Fitbit Charge</h3>
                <span class="text-body">Wearables</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$179</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-42.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Galaxy Tab</h3>
                <span class="text-body">Tablets</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$649</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap custom-shadow for-dark-rounded-bg rounded-3 border bg-white px-4 mb-4"
        style="padding-top: 11px; padding-bottom: 11px"
      >
        <span class="fs-12 fw-medium">Showing 3 of 30 Results</span>

        <nav aria-label="Page navigation example">
          <ul class="pagination mb-0 justify-content-center">
            <li class="page-item">
              <button class="page-link icon hover-bg" aria-label="Previous">
                <i class="material-symbols-outlined">keyboard_arrow_left</i>
              </button>
            </li>
            <li class="page-item">
              <button class="page-link active">1</button>
            </li>
            <li class="page-item">
              <button class="page-link">2</button>
            </li>
            <li class="page-item">
              <button class="page-link">3</button>
            </li>
            <li class="page-item"><a class="page-link">4</a></li>
            <li class="page-item">
              <button class="page-link icon hover-bg" aria-label="Next">
                <i class="material-symbols-outlined">keyboard_arrow_right</i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      class="tab-pane fade"
      id="beauty-tab-pane"
      role="tabpanel"
      aria-labelledby="beauty-tab"
      tabindex="0"
    >
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-38.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Maybelline Lash</h3>
                <span class="text-body">Makeup</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$29</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-40.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Fitbit Charge</h3>
                <span class="text-body">Wearables</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$179</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-44.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">L'Oréal Paris</h3>
                <span class="text-body">Makeup</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$69</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-37.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Levi's 501</h3>
                <span class="text-body">Pants</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$89</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-41.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Adidas Women</h3>
                <span class="text-body">Outerwear</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$85</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-43.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">H&M Basic</h3>
                <span class="text-body">T-Shirts</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$20</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap custom-shadow for-dark-rounded-bg rounded-3 border bg-white px-4 mb-4"
        style="padding-top: 11px; padding-bottom: 11px"
      >
        <span class="fs-12 fw-medium">Showing 3 of 30 Results</span>

        <nav aria-label="Page navigation example">
          <ul class="pagination mb-0 justify-content-center">
            <li class="page-item">
              <button class="page-link icon hover-bg" aria-label="Previous">
                <i class="material-symbols-outlined">keyboard_arrow_left</i>
              </button>
            </li>
            <li class="page-item">
              <button class="page-link active">1</button>
            </li>
            <li class="page-item">
              <button class="page-link">2</button>
            </li>
            <li class="page-item">
              <button class="page-link">3</button>
            </li>
            <li class="page-item"><a class="page-link">4</a></li>
            <li class="page-item">
              <button class="page-link icon hover-bg" aria-label="Next">
                <i class="material-symbols-outlined">keyboard_arrow_right</i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      class="tab-pane fade"
      id="foods-tab-pane"
      role="tabpanel"
      aria-labelledby="foods-tab"
      tabindex="0"
    >
      <div class="row justify-content-center">
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-39.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Quaker Oats</h3>
                <span class="text-body">Breakfast</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$99</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-37.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Levi's 501</h3>
                <span class="text-body">Pants</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$89</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-41.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Adidas Women</h3>
                <span class="text-body">Outerwear</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$85</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-42.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">Galaxy Tab</h3>
                <span class="text-body">Tablets</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$649</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-43.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">H&M Basic</h3>
                <span class="text-body">T-Shirts</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$20</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card custom-shadow rounded-3 border mb-4 bg-white p-20">
            <div class="pb-1">
              <RouterLink
                to="/ecommerce/product-details"
                class="d-block text-decoration-none mb-2"
              >
                <img
                  src="@/assets/images/product-44.png"
                  class="rounded-2 mb-3"
                  alt="product"
                />
                <h3 class="fs-20 fw-medium mb-1">L'Oréal Paris</h3>
                <span class="text-body">Makeup</span>
              </RouterLink>
              <div class="d-flex justify-content-between align-items-end">
                <span
                  class="fs-24 fw-medium text-success-60 lh-1 position-relative top-3"
                  >$69</span
                >
                <button
                  class="rounded-1 border-0 p-0 text-center text-primary fs-24"
                  style="
                    background-color: #dde4ff;
                    width: 35px;
                    height: 35px;
                    line-height: 35px;
                  "
                >
                  <i class="ri-shopping-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap custom-shadow for-dark-rounded-bg rounded-3 border bg-white px-4 mb-4"
        style="padding-top: 11px; padding-bottom: 11px"
      >
        <span class="fs-12 fw-medium">Showing 1 of 30 Results</span>

        <nav aria-label="Page navigation example">
          <ul class="pagination mb-0 justify-content-center">
            <li class="page-item">
              <button class="page-link icon hover-bg" aria-label="Previous">
                <i class="material-symbols-outlined">keyboard_arrow_left</i>
              </button>
            </li>
            <li class="page-item">
              <button class="page-link active">1</button>
            </li>
            <li class="page-item">
              <button class="page-link">2</button>
            </li>
            <li class="page-item">
              <button class="page-link">3</button>
            </li>
            <li class="page-item"><a class="page-link">4</a></li>
            <li class="page-item">
              <button class="page-link icon hover-bg" aria-label="Next">
                <i class="material-symbols-outlined">keyboard_arrow_right</i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoriesTab",
});
</script>
