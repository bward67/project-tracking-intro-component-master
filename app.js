const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileNavDropdown = document.querySelector(".mobile-nav-dropdown");
const hamburgerIcon = document.querySelector(".hamburger-icon");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active");
  mobileNavDropdown.classList.toggle("active");
  if (mobileMenuBtn.classList.contains("active")) {
    hamburgerIcon.src = "images/icon-close.svg";
  } else {
    hamburgerIcon.src = "images/icon-hamburger.svg";
  }
});
