import '../reusable-components/header.js';

const accordionItems = document.querySelectorAll(".faq__accordion-item");
const content = document.querySelector(".faq__content");

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        content.style.height = `${content.scrollHeight}px`;
    })

    content.addEventListener("transitionend", () => {
        content.style.height = "auto";
    })
})