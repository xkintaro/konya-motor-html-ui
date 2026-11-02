/* Navbar */
function updateNavbar() {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateNavbar();
  window.addEventListener("scroll", updateNavbar);
});
/* Navbar End */

/* Main Slider */
const swiperMainSlider = new Swiper(".swiper-main-slider", {
  loop: true,
  effect: "fade",
  fadeEffect: { crossFade: true },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 800,

  navigation: {
    nextEl: ".swiper-main-slider-slide-next",
    prevEl: ".swiper-main-slider-slide-prev",
  },
});
/* Main Slider End */

/* Product Slider */
var swiperProductSlider = new Swiper(".swiper-product-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-product-slider-slide-next",
    prevEl: ".swiper-product-slider-slide-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
/* Product Slider End */

/* Marque Slider */
const brandSwiper = new Swiper(".brand-slider", {
  speed: 5000,
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,

  allowTouchMove: false,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});
/* Marque Slider End */

Fancybox.bind("[data-fancybox]", {
  Thumbs: {
    autoStart: false,
  },
  Toolbar: {
    display: {
      left: ["infobar"],
      middle: [
        "zoomIn",
        "zoomOut",
        "toggle1to1",
        "rotateCCW",
        "rotateCW",
        "flipX",
        "flipY",
      ],
      right: ["slideshow", "thumbs", "close"],
    },
  },
});
