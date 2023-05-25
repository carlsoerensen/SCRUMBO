// Toggle menu function
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

// Event listener for burger menu
const burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', toggleMenu);
