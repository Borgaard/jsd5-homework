$(document).ready(function() {
  var $createButton = $('#create');
  var $saveButton = $('#save');
  var $printButton = $('#print');
  var favArray = [];
  var currentState;

  $createButton.on('click', function(){
    event.preventDefault();
    var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));
    var startup = ('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2] + '.');
    $('#xForY').text(startup);
    currentState = startup;
  });

  $saveButton.on('click', function(){
    event.preventDefault();
    console.log(currentState)
    favArray.push(currentState)
    console.log(favArray)
    // alert("Saved!")
  });

  $printButton.on('click', function(){
      var printFavArray = favArray.join("<br>")
    $('#xForY').text('')
    $('#favorites').html(printFavArray)
  });
});
