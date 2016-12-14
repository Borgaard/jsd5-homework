$(function() {
  // DOM is now ready
    _500px.init({
      sdk_key: 'c095a1ed8923d151066ec81a6569a9dd1195e5c5'
    });
    
    $('#login').click(function(){

    	_500px.login();
    })

    _500px.on('authorization_obtained', function(){

		$('.sign-in-view').hide();
		$('.image-results-view').show();
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
				var lat = position.coords.latitude;
				var long = position.coords.longitude;
				var radius = '25mi';
					var searchOptions = {
					geo: lat + "," + long + "," + radius,
					only: "Urban Exploration",
					sort: "Rating",
					image_size: 3,
					rpp:28
				}
				_500px.api('/photos/search', searchOptions, function(response){

				if(response.data.photos.length === 0){
					console.log(" No Photos for you");
				}else{
					response.data.photos.forEach(function(el){
						console.log(el);
						var $img = $('<img class="image">').attr('src', el.image_url).attr('alt', el.name);
						var $rating = $('<p class="rating">').html(el.rating);
						$img.appendTo('.images');
						$rating.appendTo('.images');
					})
				}
			})
		})
		}else{
			$('.images').append("Update your browser, this one epically fails.");
		}

    })

});
