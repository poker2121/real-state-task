const swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev', 
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

