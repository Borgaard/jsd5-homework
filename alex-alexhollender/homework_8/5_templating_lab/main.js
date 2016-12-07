/* Convert the existing web page, which contains data hard coded in HTML,
 * to instead pull the data from a data object into a structure created by a 
 * Handlebars template.
 * Specify your JavaScript app using an object rather than a set of functions.
 */

var menuObject = [
	{
		Name: 'Lobster',
		Serves: 2,
		Meal: 'dinner'
	}, {
		Name: 'Butternut Squash Ravioli',
		Serves: 4,
		Meal: 'dinner'
	},
		{
		Name: 'Tomato Soup',
		Serves: 1,
		Meal: 'dinner'
	},
		{
		Name: 'Egg Sandwich',
		Serves: 4,
		Meal: 'breakfast'
	}
]

menuObject.build = function(x) {
  var source = $("#menuTemplate").html();
  // Handlebars compiles the template into a callable function
  var template = Handlebars.compile(source);
  
  // call the compiled function with the template data
  var compiledTemplate = template(menuObject[x]);
  return compiledTemplate;
};

$("document").ready(function() { 
  for (var x in menuObject) {
  	$("body").append(menuObject.build(x));
  };
});