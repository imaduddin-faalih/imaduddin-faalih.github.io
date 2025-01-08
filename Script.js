// Script sederhana: toggle menu di mobile
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navRight = document.getElementById("navRight");

  navToggle.addEventListener("click", () => {
    // Tampilkan / sembunyikan menu & tombol di mobile
    const isVisible = navMenu.style.display === "flex";
    navMenu.style.display = isVisible ? "none" : "flex";
    navRight.style.display = isVisible ? "none" : "flex";
  });
});

