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


	 var footerSlider = $jq('.footer-partenaires-list').swiper({
	    mode:'horizontal',
	    pagination: false,
	    slidesPerView: 3,
	    paginationClickable: true,
	    grabCursor: true,
	    loop: true
	  });

	 $jq('.partenaire-prev').on('click', function(e){
	e.preventDefault()
	footerSlider.swipePrev()
	})
	$jq('.partenaire-next').on('click', function(e){
	e.preventDefault()
	footerSlider.swipeNext()
	})	


	$jq('.header-account-links a').on('click', function(e){
		e.preventDefault()		
		$jq('.login-lightbox-wrapper').fadeIn();
	})	
$jq('.close-lightbox').on('click', function(e){
		e.preventDefault()		
		$jq('.login-lightbox-wrapper').fadeOut();
	})	

})