// Convert favorites list to jQuery:

//window.onload = function() {
$(document).ready(function() { 
  var $button = $('#new-thing-button');
  var $thingList = $('#fav-list');
  var $newThingInput = $('#new-thing');

  $button.on("click", function(event) {
    event.preventDefault();
    var newThing = $newThingInput.val();
    var $newThingLi = $('<li>');
    $newThingLi.text(newThing);
    $thingList.append($newThingLi);
    $newThingInput.val('');
  });
});

