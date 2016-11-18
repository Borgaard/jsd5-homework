/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. 
Review the HTML and CSS code included in the starter code. You will need to write only JavaScript code to complete this exercise.

1) Write down pseudocode for the program described below.

2) Follow the steps in your pseudocode to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the CSS class name to use for the first die, firstDie
* combine 'dice-' and random2 to form the CSS class name to use for the second die, secondDie
* get the first die by ID and update the CSS class name to firstDie 
  (Hint: Use document.getElementById to reference the element, and use the className property to set the name of the CSS class.)
* get the first die by ID and update the CSS class name to secondDie 
  (Hint: Use document.getElementById to reference the element, and use the className property to set the name of the CSS class.)

3) Create code that runs the function you created whenever the button with the ID value 'roll-dice' is clicked.
  (Hint: Use document.getElementById to reference the button, and set the value of the onclick property to specify what should happen.)

*/

/* Example

IN HTML
<h1 id = "mainTitle">
	Title Text
</h1>

var title = document.get ElementById("mainTitle");
title.class Name = "new"
var button = document.get ("btn1");
button.onclick = functionName()

*/

// PSUEDOCODE

// Generate a random number between 1-6
// set random number to random1
// Generate another random number between 1-6
// set random number to random2
// combine dice# w random1 to form the css class name for firstDie
// combine dice# w random2 to form the css class name for secondDie
// Get the first die by ID and update the background with the dice# css
// do same thing for the 2nd die
// create a listener for button.click events that updates the updates the die images

// Old attempt
// function rollDice() {
// 	var random1 = Math.ceil((Math.random()*6));
// 	var random2 = Math.ceil((Math.random()*6));
// 	document.getElementById("first-die").className = "dice dice-" + random1;
// 	document.getElementById("second-die").className = "dice dice-" + random2;
// }



function rollDice() {
	var random1 = Math.ceil((Math.random()*6));
	var random2 = Math.ceil((Math.random()*6));

	var firstDieClass = "dice dice-" + random1;
	var secondDieClass = "dice dice-" + random2;

	document.getElementById("first-die").className = firstDieClass;
	document.getElementById("second-die").className = secondDieClass; 
}

document.getElementById("roll-dice").addEventListener('click', rollDice);


