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
  slidesPerView: 6, // ek time pe 6 logo
  spaceBetween: 100, // logos ke beech gap
  loop: true, // infinite loop
  speed: 3000, // speed (ms)
  autoplay: {
    delay: 0, // delay 0 = continuous scroll
    disableOnInteraction: false,
  },
  allowTouchMove: false, // drag na ho, bas auto chale
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

const banners = document.querySelectorAll(".banners_items");
const scrollLine = document.querySelector(".scroll_line");

function setLine(element) {
  const parentRect = element.parentElement.getBoundingClientRect();
  const itemRect = element.getBoundingClientRect();

  scrollLine.style.left = itemRect.left - parentRect.left + "px";
  scrollLine.style.width = itemRect.width + "px";
}

setLine(document.querySelector(".banners_items.active"));

banners.forEach((item) => {
  item.addEventListener("click", () => {
    banners.forEach((b) => b.classList.remove("active"));
    item.classList.add("active");
    setLine(item);
  });
});

//   ------------------------------------section-7-------------------------------------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 2000,
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
