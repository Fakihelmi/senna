document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll("#product-list > div");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-category");

      products.forEach((product) => {
        if (target === "all") {
          product.classList.remove("hidden");
        } else {
          product.classList.toggle(
            "hidden",
            !product.classList.contains(`category-${target}`)
          );
        }
      });
    });
  });
});
