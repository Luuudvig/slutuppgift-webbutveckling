const htmlScroll = document.getElementById("html");

const burgerButton = document.getElementById("hamburger-menu-button");
const burgerMenu = document.getElementById("hamburger-menu");

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("display-flex");
  htmlScroll.classList.toggle("noScroll");
});
