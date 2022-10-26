let header = document.querySelector('header'),
    burgerBtn = document.querySelector('.burger-btn'),
    headerList = document.querySelector('.header-list'),
    headerNavPosition = document.querySelector('.header-nav_position'),
    headerNav = document.querySelector('.header-nav')
    btn320 = document.querySelector('.btn-320')
    headerAudio = document.querySelector('.header-audio')
    headerBtn = document.querySelector('.header-btn')
    headerModal = document.querySelector('.header__modal')
    headerPopupClose = document.querySelector('.header__popup-close');

burgerBtn.addEventListener('click', () => {
  header.classList.toggle('header-open');
  burgerBtn.classList.toggle('burger-btn_close');
  headerList.classList.toggle('header-list_after');
  headerNavPosition.classList.toggle('header-nav_open');
  headerNav.classList.toggle('header-nav_open');
});

btn320.addEventListener('click', () => {
  headerAudio.classList.toggle('header-audio_open');
});

headerBtn.addEventListener('click', () => {
    headerModal.classList.add('active');
});

headerPopupClose.addEventListener('click', () => {
    headerModal.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (e.target === headerModal) {
        headerModal.classList.remove('active');
    }
});