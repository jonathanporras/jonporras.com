$(document).ready(function() {

	//music section slide down logic
	handleSlide('.solo-header', '.music-solo-section');
	handleSlide('.collab-header', '.music-collab-section');
	handleSlide('.performance-header', '.music-performance-section');

	$('.album-wrapper img.album-cover').click(function(event){
		event.stopPropagation();
		$('.album-data').fadeOut();
		$(this).next().fadeIn()
	});

	$('body, .close-button').click(function(event) {
		$('div.album-data').fadeOut();
	});

	$('div.album-data').click(function(event) {
		event.preventDefault();
		return false;
	});
	
});

function handleSlide(clickEl, slidingEl) {
	var clicked = false;
	$(clickEl).click(function() {
		if(!clicked) {
			$(slidingEl).slideDown(1000);
			$(clickEl).addClass('expanded');
			clicked = true;	
		} else {
			$(slidingEl).slideUp(1000);
			$(clickEl).removeClass('expanded');
			clicked = false;
		}
		
	});
}

function checkForExpandedClass(el) {
	if($(el).hasClass('expanded')) {
		$(el).click();
	}
}
