// Get the parent container
const productList = document.getElementById("product-list");

// Attach a single event listener to the parent container
productList.addEventListener("click", function (event) {
  // Check if the clicked element is a button
  if (event.target.tagName === "BUTTON") {
    // Find the closest product element (parent) to get product information
    const productElement = event.target.closest(".product");
    const productId = productElement.dataset.productId;

    // Handle "Add to Cart" button click
    if (event.target.classList.contains("add-to-cart")) {
      console.log(`Product ${productId} added to cart`);
      // You can add your cart logic here (e.g., update cart count, send API request, etc.)
    }

    // Handle "Favorite" button click
    if (event.target.classList.contains("favorite")) {
      console.log(`Product ${productId} added to favorites`);
    }
  }
});
