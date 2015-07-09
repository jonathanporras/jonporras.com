$(document).ready(function() {

	$('.album-wrapper img.album-cover').click(function(event){
		event.stopPropagation();
		$('.album-data').fadeOut();
		$(this).next().fadeIn()
	});

	$('body').click(function(event) {
		$('.album-data').fadeOut();
	});

	$('div.album-data').click(function(event) {
		event.preventDefault();
		return false;
	});
	
});