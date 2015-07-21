$(document).ready(function() {
	
	// Spotify Button Logic
	function login(callback) {
		var clientId = '9dd72c40b048494eb1b3734d5e831ca4',
			redirectUri = "http://127.0.0.1:1337/spotify/",
			url = 'https://accounts.spotify.com/authorize?client_id=' + clientId + '&redirect_uri='+ encodeURIComponent(redirectUri) +'&scope=user-follow-modify&response_type=token',
			width = 450,
            height = 730,
            left = (screen.width / 2) - (width / 2),
            top = (screen.height / 2) - (height / 2);


        window.addEventListener("message", function(event) {

        	if(!!event.data) {
        		console.log('token passed to callback:' + event.data.access_token);
        		callback(event.data.access_token);
        	}
        }, false);

		var w = window.open(url, 'Spotify', 'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
	}

	function followArtist(accessToken, artistUri) {

		$.ajax({
			url: 'https://api.spotify.com/v1/me/following?type=artist&ids=' + artistUri,
			headers: {
				'Authorization': 'Bearer ' + accessToken
			},
			method: 'PUT',
			success: function() {
				console.log('Spotify Follow Successful.');
			},
			dataType: 'html',
			error: function(e) {
				console.log(e);
			}
		});
	}

	var followButton = document.getElementById('spotify-follow');

	followButton.addEventListener('click', function() {
		login(function(accessToken) {
			followArtist(accessToken, '0FDxPN4OkExGczv8cRTAZx');
		});
	});
	// End Spotify Button

	// Social Backlink ////////
	// var instagramLink = $('#instagramLink'),
	// 	twitterLink = $('#twitterLink');

	// if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	// 	instagramLink.attr('href', "instagram://media?id=13216061");
	// 	twitterLink.attr('href', 'twitter://user?screen_name=jonrporras')
	// } else {
	// 	instagramLink.attr('href', "https://instagram.com/jonporras/");
	// 	twitterLink.attr('href', 'https://twitter.com/intent/follow?screen_name=jonrporras');
	// }

});