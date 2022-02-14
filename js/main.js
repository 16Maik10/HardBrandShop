"use strict";


//Функция видимости элементов

function visibilityOfElement (el){
    el.classList.toggle('invisible');
}

//Функция закрытия элементов при клике вне нужного элемента
function closeWindow (el){
    el.classList.add('invisible');
}

const browseEl = document.querySelector('.browse');
const browseDownEl = document.querySelector('.browse__down');
browseEl.addEventListener('click', () => visibilityOfElement(browseDownEl));

const burgerMenuEl = document.querySelector('.burger-menu');
const menuContentEl = document.querySelector('ul.navLinks_burger');
burgerMenuEl.addEventListener('click', () => visibilityOfElement(menuContentEl));

document.addEventListener('click', (event) => {
    if (!(event.path.includes(browseEl) || (event.path.includes(browseDownEl)))){
    closeWindow(browseDownEl);
} 

if (!(event.path.includes(burgerMenuEl) || (event.path.includes(menuContentEl)))){
    closeWindow(menuContentEl);
} 

});


const cartLogoEl = document.querySelector('.headerTop__cart');
const cartMenuEl = document.querySelector('.cart-menu');
const cartStatusEL = document.querySelector('.cart-menu__status')
const itemsCardBoxEl = document.querySelector('.itemsCardBox');
const cartMenuGoodsEl = document.querySelector('.cart-menu .cart-menu__goods');
const cartMenuTotalEl = document.querySelector('.cart-menu .cart-menu__total');

cartLogoEl.addEventListener('click', () => visibilityOfElement(cartMenuEl));



const cartAddedProductString = el => `<figure class="addedProduct" data-ordinal="${ordinal}">
<img
  src=${el.children[0].getAttribute('src')}
  alt="s"
  width="72px"
  height="85px"
/>
<figcaption class="addedProduct__descBlock">
  <p class="addedProduct__name">${el.children[1].children[0].innerHTML}</p>
  <div class="addedProduct__rating">
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star-half-o" aria-hidden="true"></i>
  </div>
  <p class="addedProduct__price"><span>${el.dataset.count}</span> x <span>${el.children[1].children[1].innerHTML}</span></p>
</figcaption>
<button class="Cart-list__button addedProduct__button button" data-count="1">
  <i class="fa fa-times-circle" aria-hidden="true"></i>
</button>
</figure>`

const totalSum = () => {
    let totalSumofPrices = 0.0;
    for(let i = 0; i < arrOfAddedProductsDataset.length; i++){
        totalSumofPrices+=Number.parseFloat(cartMenuGoodsEl.children[i].children[1].children[2].children[0].textContent) * Number.parseFloat((cartMenuGoodsEl.children[i].children[1].children[2].children[1].textContent).slice(1));
    }
    return totalSumofPrices.toFixed(2);

}


const isCartEmpty = () => {
    if(cartLogoEl.children[0].textContent !== "0"){
        cartStatusEL.classList.add('invisible');
        cartMenuTotalEl.classList.remove('invisible');
    } else {
        cartStatusEL.classList.remove('invisible');
        cartMenuTotalEl.classList.add('invisible');    
    }
    cartMenuTotalEl.children[1].textContent = `$${totalSum()}`;
}

let ordinal = 0;
let arrOfAddedProductsDataset = [];


itemsCardBoxEl.addEventListener('click', (event) => {
    if(!event.target.classList.contains('addBox__button')){
        return;
    }
    event.preventDefault();
    let elDataset = event.target.parentElement.previousElementSibling.dataset;
    if (elDataset.count == undefined || elDataset.count === "0"){
        elDataset.count = 1;
        elDataset.ordinal = ordinal;
        arrOfAddedProductsDataset[ordinal] = elDataset;
    } else {
        elDataset.count++;
        cartMenuGoodsEl.children[elDataset.ordinal].children[1].children[2].children[0].textContent = arrOfAddedProductsDataset[elDataset.ordinal].count;
        cartLogoEl.children[0].textContent++;
        cartMenuTotalEl.children[1].textContent = `$${totalSum()}`;
        return;
    }
    cartMenuGoodsEl.insertAdjacentHTML('beforeend',cartAddedProductString(event.target.parentElement.previousElementSibling));
    ordinal++;
    cartLogoEl.children[0].textContent++;
    cartMenuEl.classList.remove('invisible');
    isCartEmpty();
}
    )


cartMenuEl.addEventListener('click', event => {
    if(event.target.localName !== "i"){
        return;
    }
    let orderNum = event.target.parentElement.parentElement.dataset.ordinal;
    cartLogoEl.children[0].textContent-= arrOfAddedProductsDataset[orderNum].count;
    arrOfAddedProductsDataset[orderNum].count = 0;
    arrOfAddedProductsDataset.splice(orderNum, 1);
    event.target.parentElement.parentElement.remove();
    for(let i = orderNum; i < arrOfAddedProductsDataset.length; i++){
        cartMenuGoodsEl.children[i].dataset.ordinal--;
    }
    ordinal--;
    isCartEmpty();
})



let _Var;
let $$;
let add10;