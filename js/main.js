"use strict";


//Функция видимости элементов
function visibilityOfElement (el){
    el.classList.toggle('invisible');
}

//Функция закрытия элементов
function closeWindow (el){
    el.classList.add('invisible');
}



//Открытие/закрытие меню корзины
const cartLogoEl = document.querySelector('.headerTop__cart');
const cartMenuEl = document.querySelector('.cart-menu');


//Открытие/закрытие доп.меню у 'Browse'
const browseEl = document.querySelector('.browse');
const browseDownEl = document.querySelector('.browse__down');
browseEl.addEventListener('click', () => visibilityOfElement(browseDownEl));



//Открытие/закрытие меню-бургера для адаптива
const burgerMenuEl = document.querySelector('.burger-menu');
const menuContentEl = document.querySelector('ul.navLinks_burger');
burgerMenuEl.addEventListener('click', () => visibilityOfElement(menuContentEl));

//Закрытие всех элементов при клике вне области
document.addEventListener('click', (event) => {
    if (!(event.path.includes(cartLogoEl) || (event.path.includes(cartMenuEl)))){
        closeWindow(cartMenuEl);
    } 

    if (!(event.path.includes(browseEl) || (event.path.includes(browseDownEl)))){
        closeWindow(browseDownEl);
    } 

    if (!(event.path.includes(burgerMenuEl) || (event.path.includes(menuContentEl)))){
        closeWindow(menuContentEl);
    } 

});

cartLogoEl.addEventListener('click', () => visibilityOfElement(cartMenuEl));






