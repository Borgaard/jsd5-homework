

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

/*

*/

// ******************************************************** SECOND APPROACH USING ORIGINAL HTML (Loading dice images as background images)******************************************************** 

// 1- Giving span different classes will define which image will load. At the end that's what I need to tell the computer to do: Randomly changing the span's class.
// ** All span classes in the css file are simialr exept their number : .dice-1  ,  .dice-2 ,  .dice-3 and etc
// ** By each time randomly creating a number between 1 and 6 and adding it to the first part of span's class name ("dice-") I can randomly generate different classes. 
// ** Syntax for the above: var varName = "begining of dice class"+ randome number ;

// var diceOneClass = "dice-" +  Math.floor(Math.random() * 6 );  
// var diceTwoClass = "dice-" +  Math.floor(Math.random() * 6 ); 


// Now I need to create a function that everytime that it runs it will:
// ** 1- Point out the to the computer the two spans that I need their images to be changed : (get their id) 
// ** 2- To tell the computer to change thier current class to this new random one (reffer to the Id's class')

function roleTheDiceAgain (){
    var diceOneClass = "dice-" +  Math.ceil(Math.random() * 6 );  
    var diceTwoClass = "dice-" +  Math.ceil(Math.random() * 6 );  
    document.getElementById("first-die").className = diceOneClass;
    document.getElementById("second-die").className = diceTwoClass;
  
}

document.getElementById('roll-dice').addEventListener('click', roleTheDiceAgain);


// document.getElementById('roll-dice').onclick = roleTheDiceAgain;

//  document.getElementById('roll-dice').onclick = function () {
//     roleTheDiceAgain();
//     };
