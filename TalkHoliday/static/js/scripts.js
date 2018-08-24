var viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if(viewportWidth <= 600) {
	slideNo = 1;
} else if(viewportWidth <= 767) {
	slideNo = 2;
} else if(viewportWidth <= 1920) {
	slideNo = 3;
} else {
	slideNo = 4;
}

$('.post-scroller').slick({
  infinite: true,
  slidesToShow: slideNo, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  arrows: true, // Adds arrows to sides of slider
  //dots: true,  Adds the dots on the bottom
	prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
	nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>'
});

$('.hero-scoller').slick({
	autoplay: true,
  autoplaySpeed: 8000,
  infinite: true,
  slidesToShow: 1
});

$('.expand-one').click(function(){
  $('.content-one').slideToggle('fast');
});