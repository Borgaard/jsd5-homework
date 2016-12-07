var App = {};

// Data is usually obtained from an online source
App.forecast = [
      {
        high : 65,
        low : 48,
        precip : 20,
        uv : "moderate"},
      {
        high : 34,
        low : 23,
        precip : 44,
        uv : "severe"
      }
  ];

App.build = function(x) {
  var source = $("#weatherTemplate").html();
  // Handlebars compiles the template into a callable function
  var template = Handlebars.compile(source);
  
  // call the compiled function with the template data
  var compiledTemplate = template(App.forecast[x]);
  return compiledTemplate;
};

$("document").ready(function() { 
  for(var i = 0; i < 2; i++) {
    $("body").append(App.build(i));
  };
});
