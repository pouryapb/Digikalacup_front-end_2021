// Elements
const nextBtn = document.querySelector(".js-next-btn");
const productCard = document.querySelector(".js-product-card");
const previousBtn = document.querySelector(".js-previous-btn");
const productCardLink = document.querySelector(".js-product-link");
const productCardImage = document.querySelector(".js-product-card-image");
const productCardTitle = document.querySelector(".js-product-card-title");
const productCardPrice = document.querySelector(".js-product-card-price");
const productCardDiscountOldPrice = document.querySelector(
  ".js-product-card-discount-old-price"
);
const productCardDiscountContainer = document.querySelector(
  ".js-product-card-discount-container"
);
const productCardDiscountPercentage = document.querySelector(
  ".js-product-card-discount-percentage"
);

const PRODUCTS = window.productsListData || [];

function showProduct(product) {
  if (!product) return;
  productCardTitle.innerHTML = product.title;
  productCardLink.setAttribute("href", product.url);
  productCardImage.setAttribute("src", product.image);
  productCard.setAttribute("data-product-id", product.id);
  productCardPrice.innerHTML = window.formatPrice(product.price.selling_price);
  if (product.price.discount_percent > 0) {
    productCardDiscountContainer.classList.remove("hidden");
    productCardDiscountOldPrice.innerHTML = window.formatPrice(
      product.price.main_price
    );
    productCardDiscountPercentage.innerHTML = `${window.formatPrice(
      product.price.discount_percent
    )}٪`;
  } else {
    productCardDiscountContainer.classList.add("hidden");
  }
  init();
}

let currentProductIndex = 0;

function init() {
  // TODO: Complete this function
  clearTimeout();
  setTimeout(() => {
    nextProduct();
  }, 4000);
}

function nextProduct() {
  // TODO: Complete this function
  // showing next product in the list
  currentProductIndex++;
  if (currentProductIndex >= PRODUCTS.length) {
    currentProductIndex = 0;
  }
  showProduct(PRODUCTS[currentProductIndex]);
}

function previousProduct() {
  // TODO: Complete this function
  // showing previous product in the list
  currentProductIndex--;
  if (currentProductIndex < 0) {
    currentProductIndex = PRODUCTS.length - 1;
  }
  showProduct(PRODUCTS[currentProductIndex]);
}

// Start
showProduct(PRODUCTS[PRODUCTS.length - 1]);
// Navigation
nextBtn.addEventListener("click", () => nextProduct());
previousBtn.addEventListener("click", () => previousProduct());
