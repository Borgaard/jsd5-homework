/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';

// variables for method 1
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=SanFrancisco,us&APPID=";
var apiKey = "c78fdc82343747fbafa21a15424b715b";
var $weatherResultDiv = $('div#weatherResult');
var $printOutDiv = $('div#printOut');

// array of objects for method 2 (open weather map)
var cityInfo=[{Name:"San Francisco, CA",ID:"SanFrancisco,us"},{Name:"Burlington, VT",ID:"BurlingtonVt,us"},{Name:"New York, NY",ID:"NewYork,us"},{Name:"London, UK",ID:"London,uk"}];

// array of objects for method 2 (dark sky)
var darkSkyArray=[{name:"San Francisco, CA",Address:"37.7749,-122.4194"},{name:"Burlington, VT",Address:"44.4758,-73.2120"},{name:"New York, NY",Address:"40.7127,-74.0059"},{name:"London, UK",Address:"51.5073,-0.1277"}];

// Method 1, prints out the info for the button pressed
$('input').on('click', function() {
	var city = $(this).data('id');
	$.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + apiKey, function(data) {
		var currentWeather = data.weather[0].description;
		var cityTemp = Math.floor(data.main.temp * 9/5 - 459.67);
		$weatherResultDiv.html('The weather in ' + data.name + ' is currently ' + currentWeather + ' with a temperature of ' +cityTemp + '\xB0 F');
	});
});

// Method 2, prints out the info for the cities in the array 'cities'
$(document).ready(function() {
	cityInfo.forEach(function(element) {
		var cityName = element.Name;
		var cityId = element.ID;
		$.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityId + '&APPID=' + apiKey, function(data) {
			var currentWeather = data.weather[0].description;
			var cityTemp = Math.floor(data.main.temp * 9/5 - 459.67);
			$printOutDiv.append('<div class="weatherItem"> The weather in ' + cityName + ' is currently ' + currentWeather + ' with a temperature of ' +cityTemp + '\xB0 F <br>');
		});
	});

	// I can't get dark sky to work. The requests work if I type them into the browser but somehow not here?
	/*
	darkSkyArray.forEach(function(element) {
		var cityName = element.name;
		var cityId = element.Address;
		$.get('https://api.darksky.net/forecast/b28454a6a23987616b7ebe2ba9814ff4/' + cityId + '?exclude=currently,minutely,hourly,flags,alerts', function(data) {
			console.log(data);
			//var currentWeather = data.weather[0].description;
			//var cityTemp = Math.floor(data.main.temp * 9/5 - 459.67);
			//$printOutDiv.append('');
		});
	});
	*/

});


// objectify