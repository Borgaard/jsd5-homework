/* Convert the existing web page, which contains data hard coded in HTML,
 * to instead pull the data from a data object into a structure created by a
 * Handlebars template.
 * Specify your JavaScript app using an object rather than a set of functions.
 */

var App = {}

App.recipe = {
  "allRecipes" :[
    {
      "name" : "Shakshuka",
      "serves" : 4,
      "meal" : "Breakfast"
    },
    {
      "name" : "Black Bean Chili",
      "serves" : 8,
      "meal" : "Dinner"
    },
    {
      "name" : "Classic Peanut Butter Cookies",
      "serves" : "3 dozen",
      "meal" : "Desert"
    }
  ]
}

var source = $('#recipeList').html();
var template = Handlebars.compile(source);
var compiledTemplate = template(App.recipe);
$('body').append(compiledTemplate)
