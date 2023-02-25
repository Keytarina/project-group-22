(() => {
  var swiper = new Swiper('.mySwiper_room', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    inverse: true,
    speed: 500,
    loop: true,
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    variableWidth: true,
    slidesToShow: 3,

    breakpoints: {
      // when window width is >= 414px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 1024px
      480: {
        slidesPerView: 1,
      },
      // when window width is >= 1280px
      640: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    freeMode: true,
    speed: 1500,

    autoplay: {
      delay: 2000,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      // when window width is >= 414px
      414: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      // when window width is >= 930px

      930: {
        slidesPerView: 2,
        spaceBetween: 26,
      },
    },
    loop: true,
    slideToClickedSlide: true,
  });

  var swiper = new Swiper('.mySwiper_2', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    freeMode: true,
    speed: 500,
    slidesToScroll: 1,
    // slidesToShow: 3,


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 20,
      },
      // when window width is >= 414px
      1024: {
        spaceBetween: 34,
      },
      // when window width is >= 930px

      // 1280: {
      //   spaceBetween: 86,
      // },
    },
    loop: true,
    slideToClickedSlide: true,
  });
})();
