let header = document.querySelector('header'),
    burgerBtn = document.querySelector('.burger-btn'),
    headerList = document.querySelector('.header-list'),
    headerNavPosition = document.querySelector('.header-nav_position'),
    headerNav = document.querySelector('.header-nav');

burgerBtn.addEventListener('click', function () {
  header.classList.toggle('header-open');
  burgerBtn.classList.toggle('burger-btn_close');
  headerList.classList.toggle('header-list_after');
  headerNavPosition.classList.toggle('header-nav_open');
  headerNav.classList.toggle('header-nav_open');
});
