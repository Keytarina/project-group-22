$(document).ready(function(){
	$(".slider").slick({
    inverse: true,
    loop: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
	adaptiveHeight: true,
	spaceBetween: 20,

    // centerMode: true,
    variableWidth: true,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       spaceBetween: 34,
    //     },
    //   },
    //   {
    //     breakpoint: 1280,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
    appendArrows: $(".arrows"),
  });
});

