const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".closebtn");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("show");
  closeBtn.classList.toggle("show");
});

menu.addEventListener("click", () => {
  menu.classList.remove("show");
  closeBtn.classList.remove("show");
  menuToggle.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
  closeBtn.classList.remove("show");
  menuToggle.style.display = "block";
});
