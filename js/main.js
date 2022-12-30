let header = document.querySelector('header'),
    burgerBtn = document.querySelector('.burger-btn'),
    headerList = document.querySelector('.header-list'),
    headerNavPosition = document.querySelector('.header-nav_position'),
    headerNav = document.querySelector('.header-nav'),
    btn320 = document.querySelector('.btn-320'),
    headerAudio = document.querySelector('.header-audio'),
    headerBtn = document.querySelector('.header-btn'),
    headerModal = document.querySelector('.header__modal'),
    headerPopupClose = document.querySelector('.header__popup-close'),
    displayActive = document.querySelector('.display-active'),
    displayNone = document.querySelector('.display-none'),
    headerBtnLive = document.querySelector('.header-btn-live'),
    displayActiveNaw = document.querySelector('.display-active-naw'),
    displayNoneNaw = document.querySelector('.display-none-naw'),
    podcastsBtn = document.querySelector('.podcasts__btn');




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

podcastsBtn.addEventListener('click', () => {
    console.log('click');
    let podcastsItem = document.getElementsByClassName('podcasts__item');
    for (let i = 0; i < podcastsItem.length; i++) {
        podcastsItem[i].classList.toggle('podcasts__item-more')
    }
});

podcastsBtn.addEventListener('click', () => {
    podcastsBtn.classList.add('display-none')
});


const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");
const list3 = document.getElementById("list3");
const list4 = document.getElementById("list4");
const list5 = document.getElementById("list5");
const list6 = document.getElementById("list6");
const select = document.getElementById("select");

select.addEventListener("change", function(){
    if(select.value === 'Дмитрий_Гутенберг'){
        list1.classList.add('display');
        if(list2.classList.contains('display')){
            list2.classList.remove('display');
        }
    }
    if(select.value === 'Татьяна_Флеганова'){
        list2.classList.add('display');
        if(list3.classList.contains('display')){
            list3.classList.remove('display');
        }
    }
    if(select.value === 'Анна_Васильева'){
        list4.classList.add('display');
        if(list5.classList.contains('display')){
            list5.classList.remove('display');
        }
    }
    if(select.value === 'Пётр_Дмитриевский'){
        list5.classList.add('display');
        if(list6.classList.contains('display')){
            list6.classList.remove('display');
        }
    }
});

$(function (){
    $(".accordion") .accordion({
        heightStyle: "content",
        active: 0,
        collapsible: true
    });
})