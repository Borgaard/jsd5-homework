var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];



$(document).ready(function() {
  var $createButton = $("#create"); 
  var $saveButton = $("#save");
  var $printButton = $("#print");
  var $favoriteList = $("#favorites");
  favoritesArray = [];

    $createButton.on("click", function() {
        var random1 = Math.floor((Math.random() * startupX.length));
        var random2 = Math.floor((Math.random() * startupY.length));
        var newStartUp = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
        $('#xForY').text(newStartUp);
        $saveButton.on("click", function() {
            favoritesArray.push(newStartUp);
        });
    });
    $printButton.on("click", function() {
      $("#favorites").text(favoritesArray);
  });
});