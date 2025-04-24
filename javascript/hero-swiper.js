// Barcha swiper bloklarini topamiz
document.querySelectorAll('.hero__swiper').forEach((swiperEl, index) => {
    const swiperInstance = new Swiper(swiperEl, {
      slidesPerView: swiperEl.dataset.slides || 1,
      spaceBetween: 10,
      pagination: {
        el: swiperEl.querySelector('.swiper-pagination'),
        clickable: true,
      },
    });
  });
  