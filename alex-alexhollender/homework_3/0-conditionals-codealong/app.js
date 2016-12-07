/* if (1 > 0) {
  console.log("hi");
}
else {
	console.log("bye bye!");
} */

var name = "kittens";
if (name === "puppies") {
	name += "!";
} else if (name === "kittens") {
	name += "!!";
} else {
	name = "!" + name;
}

console.log(name);