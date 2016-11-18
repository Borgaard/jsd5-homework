/*
    1) Create a function that accepts a number as a parameter, adds the number to an array, and logs the array value to the console.
    2) Modify your function so it returns another function, using a closure to reference the array created by the first function.
        You should then be able to pass additional values to the returned function and have them added to the original array.
    3) Test your code by creating two different arrays using the main function, assigning each a different variable name.
        You should then be able to call each of these new functions to add values to each of the arrays independently, without affecting each other's values.
*/

//************************************** Tip ***********************************
/*

A parameter behaves like a variable, but it’s stored a little bit differently.
A parameter value (argument) is stored as a property of the function it’s associated with
Usually, we just assign a new name to the parent function’s parameter to easily make it available within child functions
But you could also reference it as `myFunction2.arguments[0]`
*/


//************************************** First approach  ***********************************
function myFunction2(num){
    var myArray = [2,3,4];
    var addNumber = function(){
        myArray.push(num);
        console.log(myArray);
    }
    return addNumber;
}

var newArray1 = myFunction2(5);
newArray1(6);

var newArray2 = myFunction2();
newArray2(444);




//************************************** Second approach ***********************************

// function myFunction2(num){
//     var myArray = [2,3,4];  
//     myArray.push(num);
//     console.log(myArray);

//     var result = function (numx) {
//         myArray.push(numx);
//         console.log(myArray);
//     }

//     return result;
// }

// var foo = myFunction2(5);
// foo(6);

//************************************** fucntion's Parameters and Arguments ***********************************




// function myFunction(){
//     var myFood = "Apple" ;
//     console.log(myFood);

//         var newFunction = function(){
//             console.log(myFood + "Mushroom" );
            
//         }

// }

// var gooz = myFunction();
