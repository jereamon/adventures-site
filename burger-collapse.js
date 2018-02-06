const burger = document.querySelector('.burger-container');
const navUl = document.querySelector('nav ul');


burger.addEventListener('click', function() {
  this.classList.toggle('change');
  navUl.classList.toggle('nav-open');
})