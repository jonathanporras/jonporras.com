$(document).ready(function() {
	$('div.landing-wrapper ul li')
		.hover(function() {
			$('h1.page-title').animate({opacity: .7}, 100);
		})
		.mouseout(function() {
			$('h1.page-title').animate({opacity: 1}, 100);
		});

	$('div.landing-wrapper ul li')
});

function randomNum() {
	return Math.random();
}