$(document).ready(function() {
	$('div.landing-wrapper ul li')
		.hover(function() {
			$('text').animate({opacity: .8}, 100);
		})
		.mouseout(function() {
			$('text').animate({opacity: 1}, 100);
		});

	$('div.landing-wrapper ul li')
});

function randomNum() {
	return Math.random();
}