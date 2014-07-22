/*
 * Author: Eugene Tsurcan 
 * Front End Developer 
 * [http://twitter.com/eugenetsurcan]
 * 
 */

$.noConflict();

var grommet = grommet || {};

(function($) {
	
	// Init JS
	grommet.init = function() {
		// Show Off-Canvas Navigation
		$(document).on('click', '.off-canvas-navigation .menu-item a, .active-nav .wrapper-content', function(e) {
			e.preventDefault();
			
			if($('body').hasClass('active-nav')) {
				$('body').removeClass('active-nav');
			}
			else {
				$('body').addClass('active-nav');
			}
		});
		
		// Show Dropdown menu (mobile)
		$(document).on('click', '.active-nav .menu .has-dropdown a', function(e) {
			e.preventDefault();
			
			var parent = $(this).parents('.has-dropdown');
			
			if(parent.hasClass('opened')) {
				parent.removeClass('opened');
			}
			else {
				parent.addClass('opened');
			}
		});
		
		/**
		 * Hero (Homepage Slider)
		 */
		var hero = new Swiper('.hero .swiper-container', {
	    mode: 'horizontal',	    
	    grabCursor: true,
	    paginationClickable: true,
	    calculateHeight: true,
	    centeredSlides: false,
	    slidesPerView: 2,
	    slidesPerGroup: 2,
	    loopAdditionalSlides: 2,
	    resizeReInit: true,
	    autoplay: 5000,
	    loop: true,
	    onSlideChangeEnd: function() {
	    	setTimeout(function() {
	    		hero.startAutoplay();
	    	}, 1);
			}
	  });
	  
	  // Hero: Next and Prev Slider 
	  $('.hero .sprites-arrow-left').on('click', function(e) {
	    e.preventDefault();
	    hero.swipePrev();
	  });
	  
	  $('.hero .sprites-arrow-right').on('click', function(e) {
	    e.preventDefault();
	    hero.swipeNext();
	  });
	  
	  /**
		 * Recent Launches (Footer)
		 */
		var recentLaunches = new Swiper('.recent-launches .swiper-container', {
	    mode: 'horizontal',	
	    grabCursor: true,
	    paginationClickable: true,
	    calculateHeight: true,
	    centeredSlides: false,
	    slidesPerView: 3,
	    resizeReInit: true,
	    gutter: 20,
	    //Enable Scrollbar
	    scrollbar: {
	      container: '.swiper-scrollbar',
	      hide: false,
	      draggable: true
	    }
	  });
	  
	  /* Small devices */	  
	  if($(window).width() <= 450) {
	  	if(hero.params !== undefined) {
	  		hero.params.slidesPerView = 1;
	  		hero.params.slidesPerGroup = 1;
	  		hero.reInit();
	  	}
  		
  		recentLaunches.params.slidesPerView = 1;
  		recentLaunches.reInit();
  	}
  	else if($(window).width() <= 745) {
	  	recentLaunches.params.slidesPerView = 2;
	  	recentLaunches.reInit();
	  }
  	
	  $(window).resize(function() {	
	  	if($(window).width() <= 450) {
	  		if(hero.params !== undefined) {
		  		hero.params.slidesPerView = 1;
		  		hero.params.slidesPerGroup = 1;
		  		hero.startAutoplay();
		  	}
	  		
	  		recentLaunches.params.slidesPerView = 1;
	  	}
	  	else if($(window).width() <= 745) {
	  		if(hero.params !== undefined) {	  
		  		hero.params.slidesPerView = 2;
		  		hero.params.slidesPerGroup = 2;	
		  		hero.startAutoplay();
		  	}
	  			
	  		recentLaunches.params.slidesPerView = 2;
	  	}
	  	else {
	  		if(hero.params !== undefined) {
		  		hero.params.slidesPerView = 2;
		  		hero.params.slidesPerGroup = 2;
		  		hero.startAutoplay();
		  	}
	  		
	  		recentLaunches.params.slidesPerView = 3;
	  	}
	  });
	};

	// Document Ready
	$(function($) {
		grommet.init();
	});

})(jQuery);