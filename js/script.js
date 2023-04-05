const menuBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
menuBurger.addEventListener("click", function() {
menuBurger.classList.toggle("_open");
headerMenu.classList.toggle("_open");
document.body.classList.toggle("_open");
});
new Swiper(".swiper-container",{
    pagination: {
        el: ".slider-fraction",
        type: "fraction",
    },
    navigation: {
        nextEl: ".slider__sright",
        prevEl: ".slider__sleft"
    },
});
new Swiper(".all-in-one-swiper", {
    pagination: {
        el: ".all-in-one-pagination",
        clickable:"true,"
    },
    navigation: {
        nextEl: ".all-in-one-arrovR",
        prevEl: ".all-in-one-arrovL"
    },
});

let slider1 = new Swiper(".personal__big-slider", {
    effect:"fade",
    fadeEffect: {
        crossFade: true
    },
});
let slider2 = new Swiper(".personal__small-slider", {
    spaceBetween: 70,
    pagination: {
        el: ".slider-progresbar",
        clickable: true,
    },
});
slider1.controller.control=slider2;
slider2.controller.control=slider1;
new Swiper(".secret__swiper", {
    pagination: {
        el: ".secret__pagination",
        clickable:"true,"
    },
    navigation: {
        nextEl: ".secret__arrovR",
        prevEl: ".secret__arrovL"
    },
});