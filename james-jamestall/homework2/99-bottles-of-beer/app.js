/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

//James' Psuedocode
//find lyrics to the song
//create a loop that starts runs 99 (or 100?) times
//add a conditional based on the iterator value that prints bottles for 99-2 and bottle for 1
//In the loop, print out the lyrics of the song, inserting the iterator variable as the bottle count
//Itterate the itorator variable down with each loop until it reaches zero

// LYRICS
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.

// No more bottles of beer on the wall, no more bottles of beer. 
// Go to the store and buy some more, 99 bottles of beer on the wall.


var i = 99;

//i = 99 to 2
while (i > -1) {

	if (i > 1) {

		if (i === 2) {
			// i = 2 (two bottles on wall, take one down, one *bottle* remains)
			console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i - 1) + " more bottle of beer on the wall.");
		
			--i;
		
		} else {
			// i > 2
			console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i - 1) + " more bottles of beer on the wall.");
			
			--i;

		};
	
} else {
	//i = 1
	if (i === 1) {
		
		console.log(i +" bottle of beer on the wall, " + i + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
		
		--i;

	} else { 
		//i = 0
		console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");

		--i;
	};
};

};