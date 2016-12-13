$(function() {
  _500px.init({
    sdk_key: 'c095a1ed8923d151066ec81a6569a9dd1195e5c5'
  });
  $('#login').click(function() {
    _500px.login();
  });
  _500px.on('authorization_obtained', function() {
  	_500px.api('/users', function(res) {
  		$('.profile').append('User: ' + res.data.user.username + '<br>' + res.data.user.firstname + ', ' + res.data.user.city)
  		console.log(res.data.user.firstname, res.data.user.username, res.data.user.city)
  	})
    $('.sign-in-view').hide();
    $('.image-results-view').show();
    if (navigator.geolocation) {
      	navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var radius = '25mi';
        var searchOptions = {
          geo: lat + "," + long + "," + radius,
          only: "Landscapes",
          image_size: 3,
          sort: "highest_rating",
          rpp: 28
        };
        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length === 0) {
            console.log('No photos found!');
          } else {
            console.log('Request succeeded!', response.data);
	            response.data.photos.forEach(function(pic){

	            	$('.images').append('<img class=image src=' + pic.image_url + '></img>')
	            })
            
            }
         })
        });
      ;
    } else {
      $('.images').append('Sorry, the browser does not support geolocation');
    }
  });
});