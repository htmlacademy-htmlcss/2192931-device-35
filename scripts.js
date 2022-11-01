const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.sub-navigation')
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('is-active')
})
