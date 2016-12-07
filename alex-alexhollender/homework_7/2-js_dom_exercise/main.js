/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.  
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

Bonus:

When they click submit without typing anything, alert the user 
"you must type in a value!"

*/

var createButton = document.getElementById("new-thing-button");
var listOfStuff = document.getElementById("fav-list");
var inputField = document.getElementById("new-thing");

createButton.onclick = function(event) {
	event.preventDefault();
	var newNote = document.createTextNode(inputField.value);
	
	if (inputField.value === '') {
		alert('You need to type something first!');
	} else {
		var newNoteItem = document.createElement("li");
		newNoteItem.appendChild(newNote);
		listOfStuff.appendChild(newNoteItem);
		inputField.value = '';
	}
};

