/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/


/*
var totalBear = 99;
for ( var count = totalBear ; count > 0 ; count-- ) {
  var countRemain = count - 1;
  console.log("\n" + count +  " bottles of beer on the wall , " + count + " bottles of beer. \nTake one down and pass it around, " + countRemain + " bottles of beer on the wall.");
}
console.log("\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
*/


var totalBear = 99;
for ( var count = totalBear ; count > 0 ; count-- ) {
    var countRemain = count - 1;
    if (count >= 3) {
        console.log("\n" + count +  " bottles of beer on the wall , " + count + " bottles of beer. \nTake one down and pass it around, " + countRemain + " bottles of beer on the wall.");
    }
    else if (count == 2) {
        console.log("\n" + count +  " bottles of beer on the wall , " + count + " bottles of beer. \nTake one down and pass it around, " + countRemain + " bottle of beer on the wall.");
    }
    else {
        console.log("\n" + count +  " bottle of beer on the wall , " + count + " bottle of beer. \nTake one down and pass it around, " + countRemain + " bottle of beer on the wall.");
    } 
}
console.log("\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");







