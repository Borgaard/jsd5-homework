function monkey(name, species) {
    this.name = name,
    this.species = species,
    this.foodsEaten = [],
    this.hangry = false
}

monkey.prototype.eatSomething = function(food){
    if(this.hangry) {
        this.hangry = false;
        console.log (`Thanks for the ${food}, I needed that. *${this.name} is now your friend!*`)
    }
    this.foodsEaten.push(food);
}

monkey.prototype.introduce = function() {
    if(this.foodsEaten.length) {
        console.log(`Hi! My name is ${this.name} the friendly ${this.species}, and ive eaten some ${this.foodsEaten.join(', ')}`);
    }else {
        this.hangry = true;
        console.log(`Me ${this.name} the enraged ${this.species}, i demand food! FEED ME!!`);
    }
}

var chimp = new monkey('paco', 'chimpanze');
var ape = new monkey('loco', 'ape');
var tang = new monkey('coco', 'orangatang');


chimp.eatSomething('bugs');
chimp.eatSomething('bananas');
chimp.eatSomething('apples');
chimp.introduce();

tang.eatSomething('nuts');
tang.eatSomething('leaves');
tang. introduce();

ape.introduce();
ape.eatSomething('grass');
ape.eatSomething('berries');
ape.introduce();