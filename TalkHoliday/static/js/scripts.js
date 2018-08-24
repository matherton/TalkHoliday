var viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if(viewportWidth <= 600) {
	slideNo = 1;
} else if(viewportWidth <= 1280) {
	slideNo = 3;
} else if(viewportWidth <= 1920) {
	slideNo = 4;
} else {
	slideNo = 5;
}

$('.post-scroller').slick({
  infinite: true,
  slidesToShow: slideNo, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  arrows: true, // Adds arrows to sides of slider
  dots: true, // Adds the dots on the bottom
	prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
	nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>'
});