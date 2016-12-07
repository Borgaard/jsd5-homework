
//Diego's amazing solution (not my own)
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var favorites = {}

function randomElement(anArray) {
	return anArray[Math.floor((Math.random() * anArray.length))];
}

$(function () {
  var xForY = $('#xForY');
  
  $('#create').click(function () {
    xForY.text('A startup that is ' + randomElement(startupX) + ', but for ' + randomElement(startupY));
  })
  
  $('#save').click(function () {
    favorites[xForY.text()] = true
  })
  
  $('#print').click(function () {
		$('#favorites').html(Object.keys(favorites).join('<br>'));
  });  
});






// $(document).ready(function() {
//   var $button = $('#create');
//   var $madlib = repsonse;
//   var $responseText = $("<h1>")
//   var $newThingInput = $('#new-thing');

//   $button.on('click', function(event) {
//     event.preventDefault(); 
//     var newThing = $madlib;
//     var $newThingH1 = $('<h1>');
//     $newThingLi.text(newThing); 
//     $thingList.append($newThingLi);
//     $newThingInput.val('');
//   }); 
//  });


// addContent.onclick = function() {
// 	var mainHeading = document.createElement("h1");
// 	var headingText = document.createTextNode("DOM manipulation");
// 	mainHeading.appendChild(headingText);
// 	document.body.appendChild(mainHeading);
// };