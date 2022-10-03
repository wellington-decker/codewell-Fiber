const body = document.querySelector("body");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const closeMenu = document.querySelector(".close-menu");
const burger = document.querySelector(".burger");

const openNav = () => {
  mobileNav.classList.add("display");
  overlay.classList.add("show");
  body.style.overflow = "hidden";
};

const closeNav = () => {
  mobileNav.classList.remove("display");
  overlay.classList.remove("show");
  setTimeout(overlay.classList.remove("show"), 5000);
  body.style.overflow = "auto";
};

burger.addEventListener("click", openNav);
closeMenu.addEventListener("click", closeNav);
