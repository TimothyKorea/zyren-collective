import {products} from './data.js';
import { renderProducts } from './renderproduct.js';

const container = document.querySelector('.shop-products__grid')
renderProducts(products, container);


const mobileMenuBtn = document.querySelector('.js-mobile-menu-toggle');
const mobileMenu = document.querySelector('.js-mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-active');
    toggleMenu();
})

const mobileMenuHidden = document.querySelector('.js-mobile-close-menu');

mobileMenuHidden.addEventListener('click', () => {
    mobileMenu.classList.remove('is-active');
    hideMenu();
})

const body = document.body;
const overlay = document.querySelector('.js-menu-overlay');

function toggleMenu() {
    body.classList.add('menu-open');
    overlay.classList.add('is-active');
}

function hideMenu() {
    body.classList.remove('menu-open');
    overlay.classList.remove('is-active');
}

const searchIcon = document.querySelector('.js-search-icon');
const searchOverlay = document.querySelector('.js-search-overlay');
const searchOverlayClose = document.querySelector('.js-overlay-close');

searchIcon.addEventListener('click', () => {
    searchOverlay.classList.add('active');
})

searchOverlayClose.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
})



const productSortingsLabelBtn = document.querySelector('.product-sortings__label');
const productSortingsLists = document.querySelector('.product-sortings__lists');

productSortingsLabelBtn.addEventListener('click', () => {
    productSortingsLists.classList.toggle('active');
})

const productSortingsText = document.querySelector('.product-sortings__selected-text');
const productSortingsBtn = document.querySelectorAll('.product-sortings__list-btn');

productSortingsBtn.forEach(btn => {
    btn.addEventListener('click', () => {

        productSortingsBtn.forEach(button => {
            button.classList.remove('active');
        })

        btn.classList.add('active');

        productSortingsText.textContent = btn.textContent;

        productSortingsLists.classList.remove('active');
    })
})






