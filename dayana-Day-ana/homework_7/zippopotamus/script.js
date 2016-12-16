/*
    Use the zippopotam.us service to look up and display the city and state for a zip code that users enter in the Postal Code box on the form.
    zippopotam.us does not require an API key. See the website zippopotam.us for API documentation for the U.S.
    Start by logging the city and state to the console. If you wish, you can enhance your code using DOM manipulation to populate the City and State input boxes with the data.
    Convert your event handler code to an IIFE and verify that your app still works the same way.
    Convert all of your JS code to a single IIFE and verify that the app still works the same way. 
    Bonus: 
      Instead of responding to a button click, add code to listen for the keyup event in the Postal Code box after a keyboard key is pressed and released, and check if the Postal Code box contains sufficient characters for a zip code before performing a search automatically.
*/

"use strict";

$("#zip").keyup(function(){

	//call
	var el = $(this);
	if ((el.val().length == 5)) {
    	//When the value is equal to 5 call look up function
    	lookUp();
  }
})

function lookUp(){
	var client = new XMLHttpRequest();
	//grabbing zip value
	var $zip = $('#zip').val();
	//building URL
	var url = "http://api.zippopotam.us/us/" + $zip;
		client.open("GET", url, true);
		client.onreadystatechange = function() {
			if(client.readyState == 4) {
				var city = JSON.parse(client.responseText);
				//iterate through places array
				city['places'].forEach(function(el){
					console.log(el);
					var cityName = el['place name'];
					var stateName = el['state abbreviation'];

				//Set Values when button clicked
				$('#city').val(cityName);
				$('#state').val(stateName);

				})

			};
		};

		client.send();
}

