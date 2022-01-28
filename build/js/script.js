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
  spaceBetween: 22,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
