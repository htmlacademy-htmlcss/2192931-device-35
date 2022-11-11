const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.sub-navigation')
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('is-active')
});

const modalOpenBtn = document.querySelector(".order-title");
const modal = document.querySelector(".modal-container");
const modalCloseBtn = document.querySelector(".modal-close-button");

modalOpenBtn.addEventListener("click", () => {
  modal.classList.remove("is-hide");
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("is-hide");
});
