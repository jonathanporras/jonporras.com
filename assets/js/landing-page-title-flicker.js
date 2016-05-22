$(document).ready(function() {
	$('.page-wrapper').fadeIn(1000);
  $('.splash-page').css('height', window.innerHeight);


  $(".title-text").click(function() {
    $('html, body').animate({
        scrollTop: $("#documents").offset().top
    }, 2000);
});
});

function randomNum() {
	return Math.random();
}