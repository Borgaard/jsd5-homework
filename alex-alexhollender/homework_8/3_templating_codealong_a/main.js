var helloStatement = {
	helloTitle: 'Hello World',
	helloContent: 'Templates will make an unstoppable force'
};

// Grab the template
var source = $('#hello-world-template').html();

// Compile the template with Handlebars code
var template = Handlebars.compile(source);

// Add our data into our compiled template
var compiledTemplate = template(helloStatement);

// Add the whole thing to the DOM
$('body').append(compiledTemplate);

