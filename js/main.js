"use strict";

const cartLogo = document.querySelector('.headerTop__cart');
const cartMenu = document.querySelector('.cart-menu');


cartLogo.addEventListener('click', () => cartMenu.classList.toggle('invisible'));