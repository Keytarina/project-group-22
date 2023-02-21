$(document).ready(function(){
	$('.details-restaurant__slider').slick({
    inverse: true,
    loop: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    spaceBetween: 20,
    variableWidth: true,
    appendArrows: $('.details-restaurant__slider__arrows'),
  });
  
  $('.details-hotel__slider').slick({
    inverse: true,
    loop: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    spaceBetween: 20,
    variableWidth: true,
    appendArrows: $('.details-hotel__slider__arrows'),
  });
});

