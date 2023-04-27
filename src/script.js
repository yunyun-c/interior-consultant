const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("show");
});

menu.addEventListener("click", () => {
  menu.classList.remove("show");
  menuToggle.style.display = "block";
});
