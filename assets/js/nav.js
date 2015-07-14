$(document).ready(function() {

	//nav drop down logic
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if(scrollTop >= 90){
			$('div.nav span.nav-arrow').fadeIn(1500);
		} else {
			$('div.nav span.nav-arrow').fadeOut(100);
		}
	});

	//nav menu button
	$('#nav-menu-icon').click(function(){
		$(this).toggleClass('open');
	});

	$('#nav-menu-icon').click(function() {
		$('.menu').toggle('slide')
	});

	//nav page collapse logic
	$('div.nav span.nav-arrow').click(function() {
		checkForExpandedClass('.solo-header');
		checkForExpandedClass('.collab-header');
		checkForExpandedClass('.performance-header');
	});

	//current-link logic
	$('div.menu a').each(function() {
		if($(this)[0].pathname && $(this)[0].pathname === window.location.pathname) {
			console.log()
			$(this).addClass('current-link');
		}
	});

	$('div.menu a').on({
		mouseenter: function() {
			$('div.menu a').each(function() { $(this).removeClass('current-link')});
			$(this).toggleClass('current-link');
		},
		mouseleave: function() {
			$('div.menu a').each(function() {
				$(this).removeClass('current-link');
				if($(this)[0].pathname && $(this)[0].pathname === window.location.pathname) {
					$(this).addClass('current-link');
				}
			});
		}
	});
});