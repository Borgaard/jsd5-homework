/* Convert the existing web page, which contains data hard coded in HTML,
 * to instead pull the data from a data object into a structure created by a 
 * Handlebars template.
 * Specify your JavaScript app using an object rather than a set of functions.
 */

var App = {};

App.data = {
  "recipe" : [{
    "Name" : "Shakshuka",
    "Serves" : "4",
    "Meal" : "breakfast"
    },
    {
    "Name" : "Black Bean Chili",
    "Serves" : "8",
    "Meal" : "dinner"
    },
    {
    "Name" : "Classic Peanut Butter Cookies",
    "Serves" : "3 dozen",
    "Meal" : "dessert"
    }]
  
}
var template = Handlebars.compile($("#recipes").html())
var compileTemplate = template(App.data)
$('body').append(compileTemplate);
