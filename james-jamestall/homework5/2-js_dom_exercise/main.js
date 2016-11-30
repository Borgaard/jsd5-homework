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

// - When the user clicks the submit button, take the value they've typed 
//   into the input box and add it to the list (remember: appendChild)

// var submitInput = document.getElementById("new-thing-button");
// var userInput = document.getElementById("new-thing");

// submitInput.onclick = function(event) {
// 	event.preventDefault();
// 	if (userInput.value !=== "") {

// 		var list = document.getElementById("fav-list");
// 		var newInput = document.createElement("li");
// 		newInput.className = "fav-thing"
// 		var inputContent = document.createTextNode(userInput.value);
// 		newInput.appendChild(inputContent);
//    		list.appendChild(newInput);
// 	} else {

//      // create a couple of elements in an empty HTML page
//      var main_heading = document.createElement("h1");
//      var heading_text = document.createTextNode("you must type in a value");
//      main_heading.appendChild(heading_text);
//      document.body.appendChild(main_heading);
// 	}

// }


// LATER ATTMEPT
var submitInput = document.getElementById("new-thing-button");
var userInput = document.getElementById("new-thing");

submitInput.onclick = function(event) {
	event.preventDefault();
	var main_heading = document.createElement("h1");

	if (userInput.value === "") {
		var heading_text = document.createTextNode("you must type in a value!");
     	main_heading.appendChild(heading_text);
     	document.body.appendChild(main_heading);
	} else {
		var list = document.getElementById("fav-list");
		var newInput = document.createElement("li");
		newInput.className = "fav-thing"
		var inputContent = document.createTextNode(userInput.value);
		newInput.appendChild(inputContent);
   		list.appendChild(newInput);
   		var heading_text = document.createTextNode("");
   		main_heading.appendChild(heading_text);
     	document.body.appendChild(main_heading);


	}

}
