/*
    1) Create a function that accepts a number as a parameter, adds the number to an array, and logs the array value to the console.
    2) Modify your function so it returns another function, using a closure to reference the array created by the first function.
        You should then be able to pass additional values to the returned function and have them added to the original array.
    3) Test your code by creating two different arrays using the main function, assigning each a different variable name.
        You should then be able to call each of these new functions to add values to each of the arrays independently, without affecting each other's values.
*/


// 1)
/*function sloth(newNumber) {
  numberArray = [1, 2, 3];
  numberArray.push(newNumber);
  console.log(numberArray);
  }
*/


// 2)
/*function sloth() {
  numberArray = [];
  var parrot = function(newNumber) {
    numberArray.push(newNumber);
    console.log(numberArray);
  };
  return parrot;
}
panda = sloth();
panda(9);
*/


// 3)
function sloth() {
  numberArray1 = [1, 1];
  numberArray2 = [2, 2];
  var parrot = function(newNumber) {
    numberArray1.push(newNumber);
    console.log(numberArray1);
  };
  var monkey = function(newNumber) {
    numberArray2.push(newNumber);
    console.log(numberArray2);
  };
  return {parrot, monkey};
}

sloth().parrot(7);
sloth().monkey(8);


