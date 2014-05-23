$(function(){

  var homeSlider = $('.home-slider').swiper({
    mode:'horizontal',
    pagination: '.home-slider-pagination',
    paginationClickable: true,
    grabCursor: true,
    loop: true
  });

	$('.arrow-left').on('click', function(e){
	e.preventDefault()
	homeSlider.swipePrev()
	})
	$('.arrow-right').on('click', function(e){
	e.preventDefault()
	homeSlider.swipeNext()
	})	
})