const hamburgerBtn = document.querySelector('.hamburger');
const navList = document.querySelector('.list-container');
const closeBtn = document.querySelector('.close');

hamburgerBtn.addEventListener('click', () => {
  navList.classList.add('active');
})

closeBtn.addEventListener('click', () => {
  navList.classList.remove('active');
})

