// Convert favorites list to jQuery:

$(document).ready(function() {
// window.onload = function() {
  var $button = $("#new-thing-button");
  // var button = document.getElementById('new-thing-button');
  var $thingList = $("#fav-list");
  // var thingList = document.getElementById('fav-list');
  var $newThingInput = $("#new-thing");
  // var newThingInput = document.getElementById('new-thing');
  $button.on("click", function(event) {
  // button.onclick = function(event) {
    event.preventDefault();
    var newThing = $newThingInput.val();
    // var newThing = newThingInput.value;
    var $newThingLi = $("<li>");
    // var newThingLi = document.createElement('li');
    $newThingLi.text(newThing);
    // var newThingText = document.createTextNode(newThing);
    // newThingLi.appendChild(newThingText);
    $thingList.append($newThingLi);
    // thingList.appendChild(newThingLi);
    $newThingInput.val("");
    // newThingInput.value = "";
  });
});


 