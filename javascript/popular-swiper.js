document.querySelectorAll('.popular__swiper').forEach((swiperEl) => {
    new Swiper(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        680: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

      },

    });
  });
  