/*
if (1<0) {
    console.log('hi');
} else {
    console.log('bye');
}

var name = 'kittens';

if (name === 'puppies') {
    name += '!'
} else if (name === 'kittens') {
    name += '!!'
} else {
    name = '!' + name;
}
console.log(name);


var age = 12; 
var allowed = (age > 18) ? 'Yes' : 'No';
console.log(allowed); 


var cost = 24.49;
var shipping = 8.23;

if ((cost > 100) || (shipping < 5)) {
    console.log('your shipping is free!');
    console.log('your total is $' + cost);
} else {
    console.log('your total is $' + (cost + shipping));
}

var lastName = 'Biles';
var name = firstName && lastName;
console.log(name);
*/

// var fName = fristName || 'Jane Doe';


// FUNCTIONS

function speak() {
    console.log('hello!');
}
speak();
/*
function helloErnie() { 
    console.log('hello ernie');
}
you can't do this for every individual, takes too long
*/

function sayHello(name) {
    console.log('hello ' + name);
}

sayHello('steve');


function sum(x,y,z) {
    console.log(x + y + z);
}

function sum (x,y) {
    return x + y;
}

function double (z) {
    return z * 2;
}

var newNum = double(sum(3,4));

