 const swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 45,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".slide-content .swiper-button-next",
      prevEl: ".slide-content .swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
    },
  });

  const modalSwiper = new Swiper(".modal-images", {
  slidesPerView: 1,
  nested: true,
  navigation: {
    nextEl: ".modal-next",
    prevEl: ".modal-prev",
  },
});