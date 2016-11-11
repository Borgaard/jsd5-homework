/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

/*
use a for loop and if/else conditionals to `console.log()` 99 bottles of beer on the wall. 
it’d be a bit tedious to write the entire thing out, right?

FOR EXAMPLE:
var cities = ['atlanta', 'boston', 'chicago'];
for (var i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}
*/
//+ 'bottles of beer on the wall' + bottle + 'bottles of beer on the wall'

/*var bottleCount = 99;

for (var i = bottleCount; i = 0; i--) {
  console.log(bottleCount(i));  
}
bottleCount;
console.log(bottleCount);
*/

var bottleCount = 99;

for (var i = bottleCount; i >= 0; i--) {
  if(i > 1) {
    console.log(i + " bottles of beer on the wall " + i + " bottles of beer, take one down and pass ...around " + (i - 1) + " bottles of beer on the wall");
  } else if (i >= 1) {
    console.log(i + " bottle of beer on the wall " + i + " bottle of beer, take one down and pass ...around " + i + " bottle of beer on the wall");
  } else {
    console.log(i + " bottles of beer on the wall " + i + " bottles of beer, head to the store " + i + " bottles of beer on the wall");
  }
}



