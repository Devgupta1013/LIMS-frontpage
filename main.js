// ---------------------------------section1-------------------------------

var swiper = new Swiper(".card_slider", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  effect: "fade",
  speed: 2000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// -----------------------------------------section2------------------------------------
var swiper = new Swiper(".mylogo", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  freeMode: true,
  freeModeMomentum: false,
  speed: 6000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

// ------------------------------------------section-3--------------------------------------
var swiper = new Swiper(".cards_main", {
  slidesPerView: 3,
  spaceBetween: 25,
  navigation: {
    nextEl: ".nav-btn.next",
    prevEl: ".nav-btn.prev",
  },
});

document.querySelectorAll(".nav-btn").forEach((btn, index) => {
  if (btn.textContent.includes("→")) btn.classList.add("next");
  else btn.classList.add("prev");
});

//   ------------------------------------section-7-------------------------------------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
