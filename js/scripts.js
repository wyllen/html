$jq = jQuery.noConflict();
$jq(function(){

  var homeSlider = $jq('.custom-grid-slider').swiper({
    mode:'horizontal',
    pagination: false,
    slidesPerView: 2,
    paginationClickable: true,
    grabCursor: true,
    loop: true
  });

	$jq('.arrow-left').on('click', function(e){
	e.preventDefault()
	homeSlider.swipePrev()
	})
	$jq('.arrow-right').on('click', function(e){
	e.preventDefault()
	homeSlider.swipeNext()
	})	

	$jq('.top-sidebar-toggle-bouton').on('click', function(e){
		$jq('.top-sidebar > .inner').slideToggle();
		$jq(this).children().toggleClass('arrow-bottom');
		$jq(this).children().toggleClass('arrow-top');
	})	


})