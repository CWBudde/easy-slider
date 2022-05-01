(function( $ ) {
	'use strict';

	$(function() {
		$('.wp-block-easy-slider-slider-block').each(function(i){
			let $elem = $(this),
			centered = $elem.attr('data-centered') || false,
			showArrows = $elem.attr('data-showarrows') || false,
			showDots = $elem.attr('data-showdots') || false,
			rtl = $elem.attr('data-rtl') || false,
			autoplay = $elem.attr('data-autoplay') || true,
			autoplaySpeed = $elem.attr('data-autoplay-speed') || 3000,
			loop = $elem.attr('data-loop') || true,
			fade = $elem.attr('data-fade') || false,
			lazyLoad = $elem.attr('data-lazyload') || false,
			pauseOnFocus = $elem.attr('data-pause-on-focus') || true,
			pauseOnHover = $elem.attr('data-pause-on-hover') || true,
			variableWidth = $elem.attr('data-variable-width') || false,
			slideCount = parseInt( $elem.attr('data-slidecount') ) || 1 ;
			
			$elem.slick({
				slidesToShow: slideCount==NaN ? 1 : slideCount,
				centerMode: centered,
				arrows: showArrows,
				dots: showDots,
				rtl: rtl,
				autoplay: autoplay,
				autoplay: autoplaySpeed,
				infinite: loop,
				fade: fade,
				lazyLoad: lazyLoad,
				pauseOnFocus: pauseOnFocus,
				pauseOnHover: pauseOnHover,
				variableWidth: variableWidth,
				responsive: [
					{
					  breakpoint: 768,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					  }
					}
				]
			});
		});
	})

})( jQuery );