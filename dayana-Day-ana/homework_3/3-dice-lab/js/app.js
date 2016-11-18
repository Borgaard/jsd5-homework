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

var btn = document.getElementById("roll-dice");
var first = document.getElementById("first-die");
var second = document.getElementById("second-die");

var rollDice = function (){
	var numero = Math.floor(Math.random() * (6 - 1) + 1);
	return "dice-"+numero;
};

btn.onclick = function(){

	//Lets roll the dice and generate a random dice-number
	//while setting it's class name
	first.className = rollDice();
	second.className = rollDice();

}
