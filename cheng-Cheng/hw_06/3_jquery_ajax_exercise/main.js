/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';

var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?id=5391959&APPID=127af64720d2b5d53c24dc77637b25b5";
var apiKey = "127af64720d2b5d53c24dc77637b25b5";

$.ajax({
  url: weatherUrl,
  data: {
    format: "json"
  },

  success: function(data){
    // console.log(data)
    var fahrenheit = (data.main.temp*9/5-459.67)
    // console.log(data.main.temp)
    console.log(fahrenheit + ' degress fahrenheit')
  }
});
