$(document).ready(function() {
	//nav drop down logic
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if(scrollTop >= 90){
			$('div.nav').slideDown(500);
			$('div.nav span.nav-arrow').fadeIn(1500);
		} else {
			$('div.nav').slideUp(500);
			$('div.nav span.nav-arrow').fadeOut(100);
		}
	});

	//nav page collapse logic
	$('div.nav span.nav-arrow').click(function() {
		checkForExpandedClass('.solo-header');
		checkForExpandedClass('.collab-header');
		checkForExpandedClass('.performance-header');
	});



	//music section slide down logic
	handleSlide('.solo-header', '.music-solo-section');
	handleSlide('.collab-header', '.music-collab-section');
	handleSlide('.performance-header', '.music-performance-section');

	$('.album-wrapper img.album-cover').click(function(event){
		event.stopPropagation();
		$('.album-data').fadeOut();
		$(this).next().fadeIn()
	});

	$('body').click(function(event) {
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
