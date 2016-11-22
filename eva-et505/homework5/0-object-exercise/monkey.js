/* Work with a partner to create objects for three different monkeys (called monkey1, monkey2, monkey3), each with the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Choose which partner will initially take the pair programming role of driver and who will be the observer. 
Switch roles after creating the first object, then again after creating the second. 
Also be sure each partner takes a turn in each role during the exercise steps below.

Exercise your monkeys by retrieving their properties and using their methods. 
Practice using both syntaxes for retrieving properties (dot notation and brackets).

*/

var monkeyOne = {
    name: "Lulu",
    species: "Orangutan",
    foodsEaten: [],
    eatSomething: function(foodGiven){ 
        monkeyOne.foodsEaten.push(foodGiven);
// you are defining food given in the console, and it will push it to foodsEaten empty array
    },
    
    introduce: function(introduce) {
        console.log("My name is " + monkeyOne.name + "," + "my species is " + monkeyOne.species + ". " + "I have eaten " + monkeyOne.foodsEaten + ".");
    },
};

var monkeyTwo = {
    name: "Barababa",
    species: "Pavian",
    foodsEaten: [],
    eatSomething: function(foodGiven){
        monkeyTwo.foodsEaten.push(foodGiven);
    },

    introduce: function(introduce) {
        console.log("Hi, I'm " + monkeyTwo.name + ", a " + monkeyTwo.species + ", that has eaten " + monkeyTwo.foodsEaten + ".");
    }
};

var monkeyThree = {
    name: "Rhondi",
    species: "Gorilla",
    foodsEaten: [],
    eatSomething: function(foodGiven){
        monkeyThree.foodsEaten.push(foodGiven);
    },
    introduce: function(introduce){
        console.log("This is " + monkeyThree.name + ", I am a " + monkeyThree.species + ". I have " + monkeyThree.foodsEaten + " in my belly.");
    }
};