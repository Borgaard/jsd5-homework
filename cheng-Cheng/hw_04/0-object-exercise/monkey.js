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
  name: "Bob",
  species: "Gorilla",
  foodsEaten: [],
  eatSomething: function(food) {
    monkey1.foodsEaten.push(food)
    console.log("I have just eaten " + food)
  },
  introduce: function() {
    console.log("Hi my name is " + monkey1.name);
    console.log("I am a " + monkey1.species);
    for (i = 0; i < monkey1.foodsEaten.length; i++) {
    console.log("I have eaten " + monkey1.foodsEaten[i] + " today!");
    }
  }
}

var monkey2 = {
  name: "Joe",
  species: "Bonobo",
  foodsEaten: "Apples",
  eatSomething: function(food) {
    monkey1.foodsEaten.push(food)
    console.log("I have just eaten " + food)
  },
  introduce: function() {
    console.log("Hi my name is " + monkey2.name);
    console.log("I am a " + monkey2.species);
    for (i = 0; i < monkey2.foodsEaten.length; i++) {
    console.log("I have eaten " + monkey2.foodsEaten[i] + " today!");
    }
  }
}

var monkey3 = {
  name: "Adam",
  species: "Chimpanzee",
  foodsEaten: "Pears",
  eatSomething: function(food) {
    monkey1.foodsEaten.push(food)
    console.log("I have just eaten " + food)
  },
  introduce: function() {
    console.log("Hi my name is " + monkey2.name);
    console.log("I am a " + monkey2.species);
    for (i = 0; i < monkey2.foodsEaten.length; i++) {
    console.log("I have eaten " + monkey2.foodsEaten[i] + " today!");
    }
  }
}
