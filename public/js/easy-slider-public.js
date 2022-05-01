(function( $ ) {
	'use strict';

	$(function() {
		$('.wp-block-easy-slider-slider-block').each(function(i){
			let $elem = $(this),
			centered = ($elem.attr('data-centered') || 'false') === 'true',
			showArrows = ($elem.attr('data-showarrows') || 'false') === 'true',
			showDots = ($elem.attr('data-showdots') || 'false') === 'true',
			rtl = ($elem.attr('data-rtl') || 'false') === 'true',
			autoplay = ($elem.attr('data-autoplay') || 'true') === 'true',
			autoplaySpeed = $elem.attr('data-autoplay-speed') || 3000,
			loop = ($elem.attr('data-loop') || 'true') === 'true',
			fade = ($elem.attr('data-fade') || 'false') === 'true',
			lazyLoad = $elem.attr('data-lazyload') || 'ondemand',
			pauseOnFocus = ($elem.attr('data-pause-on-focus') || 'true') === 'true',
			pauseOnHover = ($elem.attr('data-pause-on-hover') || 'true') === 'true',
			variableWidth = ($elem.attr('data-variable-width') || 'false') === 'true',
			slideCount = parseInt( $elem.attr('data-slidecount') ) || 1 ;

			let slickOptions = {
				slidesToShow: slideCount==NaN ? 1 : slideCount,
				centerMode: centered,
				arrows: showArrows,
				dots: showDots,
				autoplay: autoplay,
				autoplaySpeed: autoplaySpeed,
				infinite: loop,
				lazyLoad: lazyLoad,
				pauseOnFocus: pauseOnFocus,
				pauseOnHover: pauseOnHover,
				rtl: rtl,
				fade: fade,
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
			}

			console.log( 'Options: ', slickOptions);

			$elem.slick(slickOptions);
		});
	})

})( jQuery );