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

var monkey1 = {
	name: "Ron Nearly",
	species: "Mandrill",
	foodsEaten: ["Bananas", "Nuts", "Fish", "Leaves"]
};

var monkey2 = {
	name: "Claudia Dias",
	species: "Proboscis",
	foodsEaten: ["Dates", "Rasins", "Apples", "Berries"]
};

var monkey3 = {
	name: "Andre Siegal",
	species: "Orangutan",
	foodsEaten: ["Figs", "Bamboo", "Cherries", "Bark"]
};

monkey1.eatSomething = function(x) {
	(this.foodsEaten).push(x);
};

monkey1.introduce = function() {
	console.log("Greetings. I am " + this.name + " the " + this.species + ". I have eatten:");
	for (var i = 0; i < (this.foodsEaten).length; i++) {
		console.log(this.foodsEaten[i]);
	}
}

// Creating the monkeys within one object:

/*
var monkeys = {
	monkey1: {
		name: "Ron Nearly",
		species: "Mandrill",
		foodsEaten: ["Bananas", "Nuts", "Fish", "Leaves"]
	},
	monkey2: {
		name: "Claudia Dias",
		species: "Proboscis",
		foodsEaten: ["Dates", "Rasins", "Apples", "Berries"]
	},
	monkey3: {
		name: "Andre Siegal",
		species: "Orangutan",
		foodsEaten: ["Figs", "Bamboo", "Cherries", "Bark"]
	}
};

// Stuff we practied in class


var myMotorcycle = {
	wheels: 2,
	color: "blue",
	maxSpeed: 150,
	owners: ["Terrence", "Mei-Young"]
};

// Adding to object:
myMotorcycle.age = 15;


// The For In loop:

for (var prop in myMotorcycle) {
   console.log(prop + " = " + myMotorcycle[prop]);
};

// Creating a Method:

myMotorcycle.goFast = function() {
	console.log("Accellerating to " + myMotorcycle.maxSpeed);
};
*/



