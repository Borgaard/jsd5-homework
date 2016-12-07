/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

(function () { 

'use strict';
var apiKey = "a0797a5826a85e4e3e3a3f08cb8e1272";
var weatherData;



var city = document.getElementById("weather");
var form = document.getElementById("weatherForm");
var temp = document.getElementById("temp");

form.addEventListener('submit', function(ev){
ev.preventDefault();
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q="+city.value+"&APPID="+apiKey;
	console.log(city.value);
	$.ajax({
		url: weatherUrl,
		data: {
			format:'json'
		},
		success: function(data){
			
			weatherData = data;

			spitData(data);

		}
	}); 

}, false)
function spitData(data){

	var C = ( data.main.temp - 273.15)
	console.log(C)
	var F = C * 9/5 + 32
	console.log(F);
	temp.innerHTML = data.name +" "+ F;

}

})();

