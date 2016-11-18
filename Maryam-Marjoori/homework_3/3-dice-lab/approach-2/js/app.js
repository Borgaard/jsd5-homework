

// Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. 
// Review the HTML and CSS code included in the starter code. You will need to write only JavaScript code to complete this exercise
// 1) Write down pseudocode for the program described below.
// 2) Follow the steps in your pseudocode to write your code.

// * 1- Create Two arrays which hold the names of all the dice image files 
// * generate a random number between 1 - 6 and store to a variable, random1
// * generate a random number between 1 - 6 and store to a variable, random2
// * combine 'dice-' and random1 to form the CSS class name to use for the first die, firstDie
// * combine 'dice-' and random2 to form the CSS class name to use for the second die, secondDie
// * get the first die by ID and update the CSS class name to firstDie 
//   (Hint: Use document.getElementById to reference the element, and use the className property to set the name of the CSS class.)
// * get the first die by ID and update the CSS class name to secondDie 
//   (Hint: Use document.getElementById to reference the element, and use the className property to set the name of the CSS class.)

// 3) Create code that runs the function you created whenever the button with the ID value 'roll-dice' is clicked.
//   (Hint: Use document.getElementById to reference the button, and set the value of the onclick property to specify what should happen.)


// ******************************************************** Second APPROACH(using img tag with src propperty) ******************************************************** 

//1 Create two arrays which hold the addresses of all the dice images 
var diceLeft = ["img/1.png" , "img/2.png" ,"img/3.png", "img/4.png" , "img/5.png" , "img/6.png"];
var diceRight = ["img/1.png" , "img/2.png" ,"img/3.png", "img/4.png" , "img/5.png" , "img/6.png"];


//2 Insetad of calling them array elements by their fixed IDs (ex:diceLeft[4]), for both arrays I need to call array elements by a variable which randomly changes from 0 to 5

//var random1 = Math.floor(Math.random() * 6 );
//var random2 = Math.floor(Math.random() * 6 );

//** Hint: Now I can call each index with my new variable Ex: diceLeft[random1]

// 3- Now I need to access the dice image addresses that are used in the HTML page. 

// ** A- For such access I need to tell the computer which element in this document it is that I am interested in it's src propperty
// ** B- So I need to get the element's identifier(id). || Syntax: document.getElementById("the id")
// ** C- And I need to tell the computer : Hey I want the address(src) related to this element in this document || document.getElementById("the id").src
// ** D- Now I need to tell the computer: Hey now that we have this address, pick a random address from the array each time and assign it to this address.
//   Which is : document.getElementById("the id").src = array["randome index"]

//   document.getElementById("first-die").src = diceLeft[random1];
//   document.getElementById("first-die").src = diceLeft[random1];

// The problem now is that this only happens on page refresh


// 4- Now I need to make this change happen when the button is clicked. So I need to turn this change into a function and also include my random number generators into this function so evertime it runs it creates
// a new number. If randome1 and random2 are not included in the function the button only run the randomizayion once and changes the images once.

function roleTheDice(){
  var random1 = Math.floor(Math.random() * 6 );
  var random2 = Math.floor(Math.random() * 6 );
  document.getElementById("first-die").src = diceLeft[random1];
  document.getElementById("second-die").src = diceRight[random2];
 }

// Now I need to make the html button be linked to this action so everytime the click action is performed the roleTheDice function is triggered

