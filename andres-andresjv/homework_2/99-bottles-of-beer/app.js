

// Initiale Variable Bottles and assign value
var bottlesTotal = 99;
// Create variables for the different parts of the sentence 
var songArray = [" bottles of beer on the wall, ", " bottles of beer. \n", "Take one down and pass it around, ", " bottles of beer on the wall."];


//Count down loop
while(bottlesTotal > 0){

  //Check if bottles are grater than 1
  if(bottlesTotal > 1){
      console.log(bottlesTotal + songArray[0] + bottlesTotal + songArray[1] + songArray[2] + (bottlesTotal-1) + songArray[3]);
  } else {
       // Create a new variable that replaces the word bottles to bottle
      var firstLineI_1 = songArray[0].replace("bottles", "bottle");
      var firstLineII_1 = songArray[1].replace("bottles", "bottle");
      console.log(bottlesTotal + firstLineI_1 + bottlesTotal + firstLineII_1 + songArray[2] + (bottlesTotal-1) +songArray[3]);
  };

  bottlesTotal --;
}

console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
bottlesTotal = 99;

/*

99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
*/
