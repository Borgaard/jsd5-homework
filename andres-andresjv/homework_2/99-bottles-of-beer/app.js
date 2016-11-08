/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.




  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/



// Initiale Variable Bottles and assign value
var bottlesTotal = 99;
// Create variables for the different parts of the sentence 
var firstLineI = " bottles of beer on the wall, "
var firstLineII = " bottles of beer. \n";
var secondLinePartI = "Take one down and pass it around, ";
var secondLinePartII = " bottles of beer on the wall.";

//Count down loop
while(bottlesTotal > 0){

  //Check if bottles are grater than 1
  if(bottlesTotal > 1){
      console.log(bottlesTotal + firstLineI + bottlesTotal + firstLineII + secondLinePartI + (bottlesTotal-1) +secondLinePartII);
  } else {
        // if bottles are === 1
        // Create a new variable that replaces the word bottles to bottle
      var firstLineI_1 = firstLineI.replace("bottles", "bottle");
      var firstLineII_1 = firstLineII.replace("bottles", "bottle");
      console.log(bottlesTotal + firstLineI_1 + bottlesTotal + firstLineII_1 + secondLinePartI + (bottlesTotal-1) +secondLinePartII);
  };

  bottlesTotal --;
}

console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
bottlesTotal = 99;

/*

99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
*/
