/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:

    34578 Dolphin Street, Wonka NY, 44506
*/
var stName = ["Brady Drive" , "Simmons Ave." , "Thorton Lane" , "Stanley Place" , "Wonka Blvd" , "Vador ct."];
var cityState = ["Santa Rosa CA" , "Walnut Creek CA" , "Orlando FL" , "Seattle WA" , "Reno NV " , "Houstion TX"];
//var state = ["CA" , "NY" , "TX" , "NV" , "WA" , "AZ" , "FL"];
//var zip = ["95678" , "23456" , "23907" , "99678" , "22432" , "99321" , "67321"];

//Ransdom Number generator
var randNum = function(min , max){
  return Math.floor(Math.random() * (max - min) + min);
}

//Array random index getter!!
var randGen = function(array){
  for( i=0 ; i<=array.length ; i++ ){
    //return array[Math.floor( Math.random() * array.length )];
    return array[randNum(0,array.length)]
  }
}
console.log(randNum(1 , 1000) + " " + randGen(stName) + ", " + randGen(cityState) + ", " + randNum(10000 , 99999) )
