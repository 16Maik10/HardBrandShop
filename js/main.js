"use strict";


//Функция видимости элементов
function visibilityOfElements (el){
    el.classList.toggle('invisible');
}

//Открытие/закрытие меню корзины
const cartLogoEl = document.querySelector('.headerTop__cart');
const cartMenuEl = document.querySelector('.cart-menu');

cartLogoEl.addEventListener('click', () => cartMenuEl.classList.toggle('invisible'));



//Доп.меню у 'Browse'
const browseDownEl = document.querySelector('.browse__down');
document.querySelector('.search').addEventListener('click', () => browseDownEl.classList.toggle('invisible'));



//Меню-бургер для адаптива
const menuContentEl = document.querySelector('ul.navLinks_burger');
document.querySelector('.burger-menu').addEventListener('click', () => menuContentEl.classList.toggle('invisible'))


