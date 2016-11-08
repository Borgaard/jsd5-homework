/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

imageArray = ['image1.png','image2.png','image3.png'];
console.log(imageArray);
document.write('Question 1' + '<br>')
document.write(imageArray.join(', ') + '<br>');

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

var q2 = imageArray[0];
console.log(q2);
document.write('<br>' + 'Question 2' + '<br>')
document.write(q2 + '<br>')
/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

var q3 = imageArray.length;
console.log(q3);
document.write('<br>' + 'Question 3' + '<br>')
document.write(q3 + '<br>')
/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */


var q4 = imageArray[q3-1];
console.log(q4);
document.write('<br>' + 'Question 4' + '<br>')
document.write(q4 + '<br>')
// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach function or a map function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

numbers = [1,2,3,4]

var extraNumbers = numbers.map(function(add) {
  return add + 1;
});
console.log(extraNumbers)
document.write('<br>' + 'Question 5' + '<br>')
document.write(extraNumbers.join(', ') + '<br>')
/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */

var sum = extraNumbers.reduce(function(a, b){
  return a + b;
}, 0);

var avg = sum/extraNumbers.length
console.log(avg)
document.write('<br>' + 'Question 6' + '<br>')
document.write(avg)
