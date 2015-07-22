$(document).ready(function() {

	//nav drop down logic
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if(scrollTop >= 90) {
			$('div.nav p.nav-arrow').fadeIn(1500);
		} else {
			$('div.nav p.nav-arrow').fadeOut(100);
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
	$('div.nav p.nav-arrow').click(function() {
		checkForExpandedClass('.solo-header');
		checkForExpandedClass('.collab-header');
		checkForExpandedClass('.performance-header');
		checkForExpandedClass('.contact-header');
		$("html, body").animate({ scrollTop: "0" }, 500);
	});

	//current-link logic
	$('div.menu a.nav-link').each(function() {
		if($(this)[0].pathname && $(this)[0].pathname === window.location.pathname) {
			$(this).addClass('current-link');
		}
	});

	$('div.menu a.nav-link').on({
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