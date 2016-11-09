/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

var one = "bottles of beer on the wall,";

var two = "bottles of beer. Take one down and pass it around,";

var three = "bottles of beer on the wall.";

var four = "1 bottle of beer on the wall.";


for (var count = 99; count > 0; count--) { if (count > 2) { console.log(count + " " + one + " " + count + " " + two + " " + (count - 1) + " " + three);} else if (count === 2) { console.log(count + " " + one + " " + count + " " + two + " " + four)} else {console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall." + "\n" + "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")};};