/*
    1) Create a function that accepts a number as a parameter, adds the number to an array,
    and logs the array value to the console.


    2) Modify your function so it returns another function, using a closure to reference the array
    created by the first function.
    You should then be able to pass additional values to the returned function and have them
    added to the original array.


    3) Test your code by creating two different arrays using the main function, assigning each a
    different variable name.
    You should then be able to call each of these new functions to add values to each of the
    arrays independently, without affecting each other's values.
*/

function firstFunction(){
  var newArray = [5,2];
  return function(number) {
    newArray.push(number);
    console.log(newArray);
    }

  //  var arrayLength = newArray.length;
  //console.log("length is " + arrayLength);
  //console.log("last array element is " + newArray[arrayLength - 1]);
}

var x = firstFunction()
var y = firstFunction()
