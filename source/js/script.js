// slider

const slider_info = new Swiper(".info-block__slider", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  simulateTouch: false,
});

const service_slider = new Swiper(".service__slider", {
  slidesPerView: 3,
  spaceBetween: 14,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const bulk_materials_slider = new Swiper(".bulk-materials__slider", {
  slidesPerView: 3,
  spaceBetween: 14,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const feedback_slider = new Swiper(".feedback__slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const partners_slider = new Swiper(".partners__slider", {
  slidesPerView: 3,
  spaceBetween: 14,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
  },
});

const swiper = new Swiper(".delivery-block-mySwiper", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".delivery-block-mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  autoplay: {
    delay: 2500,
  },
});

const advantage_slider = new Swiper(".advantage-slider", {
  direction: "horizontal",
});

// burger-menu

const open_button_menu = document.querySelector(".page-header__button-menu");
const page_menu = document.querySelector(".page-header__menu");
const closed_button_menu = document.querySelector(
  ".page-header__button-menu--closed"
);

open_button_menu.addEventListener("click", function () {
  page_menu.classList.add("page-header__menu--open");
});

closed_button_menu.addEventListener("click", function () {
  page_menu.classList.remove("page-header__menu--open");
});
