function sayHello(name) {
	var text = "Hello " + name;
	var say = function() {
		console.log(text);
	};
	say();
}

function sayHello2(name) {
	var text = "Hello " + name;
	var say = function() {
		console.log(text);
	};
	
	return say;
}

var say2 = sayHello2('Bob');
say2();