$(document).ready(function() {

	//music section slide down logic
	handleSlide('.solo-header', '.music-solo-section');
	handleSlide('.collab-header', '.music-collab-section');
	handleSlide('.performance-header', '.music-performance-section');
	handleSlide('.contact-header', '.music-contact-section');

	$('.album-wrapper img.album-cover').click(function(event){
		event.stopPropagation();
		$('.album-data').fadeOut();
		$('div.bg-screen').fadeOut();
		$(this).next().fadeIn();
		$('div.bg-screen').fadeIn();
	});

	$('body, .close-button').click(function(event) {
		$('div.album-data').fadeOut();
		$('div.bg-screen').fadeOut();
	});

	$('div.album-data').click(function(event) {
		event.preventDefault();
		return false;
	});



	// music splash
	$('.music-list-wrapper').hover(function (event) {
		event.preventDefault();
		if ($(this).next().attr('class') === 'album-splash-data') {
			$(this).next().appendTo('.music-splash-section').show();
		} else {
			var id = $(this).attr('id');
			$('.music-splash-section + #' + id);
		}
	});
	
});

function handleSlide(clickEl, slidingEl) {
	var clicked = false;
	$(clickEl).click(function() {
		if(!clicked) {
			$(slidingEl).slideDown(1000);
			$(clickEl).addClass('expanded');
			
			var span = $(clickEl).children(':first');

			$({alpha:0}).animate({alpha:45}, {
	    		duration: 1000,
	    		step: function(){
	        		span.css('transform','rotate('+this.alpha+'deg)');
	    		}
			});

			clicked = true;	
		} else {
			$(slidingEl).slideUp(1000);
			$(clickEl).removeClass('expanded');

			var span = $(clickEl).children(':first');

			$({alpha:45}).animate({alpha:0}, {
	    		duration: 1000,
	    		step: function(){
	        		span.css('transform','rotate('+this.alpha+'deg)');
	    		}
			});

			clicked = false;
		}	
	});
}

function checkForExpandedClass(el) {
	if($(el).hasClass('expanded')) {
		$(el).click();
	}
}
