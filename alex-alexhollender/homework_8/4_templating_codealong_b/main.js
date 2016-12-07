var App = {};

// Data is usually obtained from an online source
App.forecast = {
      "high" : 61,
      "low" : 42,
      "precip" : 40,
      "uv" : "low"
  };

// Grab the template
var source = $('#weather-template').html();

// Compile the template with Handlebars code
var template = Handlebars.compile(source);

// Add our data into our compiled template
var compiledTemplate = template(App.forecast);

// Add the whole thing to the DOM
$('body').append(compiledTemplate);


