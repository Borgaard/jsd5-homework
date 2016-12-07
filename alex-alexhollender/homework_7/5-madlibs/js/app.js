var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupY = ['zebras', 'umbrellas', 'carrots', 'the news', 'menus', 'clocks', 'statues', 'coffins', 'propoganda', 'rugs', 'napkins'];

var buttonCreate = document.getElementById('create');
var buttonSave = document.getElementById('save');
var buttonPrint = document.getElementById('print');

var outputH1 = document.getElementById('xForY');

var favorites = document.getElementById('favorites');

var arrayFavorites = [];

buttonCreate.onclick = function() {
	outputH1.innerHTML = '';
	var random1 = Math.floor((Math.random() * startupX.length));
	var random2 = Math.floor((Math.random() * startupY.length));
	var result = ('This startup is like ' + startupX[random1] + ' but for ' + startupY[random2]);
	var resultNode = document.createTextNode(result);
	outputH1.appendChild(resultNode);
};

buttonSave.onclick = function() {
	arrayFavorites.push(outputH1.innerHTML);
	console.log(arrayFavorites);
};

buttonPrint.onclick = function() {
	for(var i = 0; i < arrayFavorites.length; i++) {
		var newParagraph = document.createElement('p');
		var arrayItem = arrayFavorites[i];
		var arrayItemNode = document.createTextNode(arrayItem)
		favorites.appendChild(newParagraph);
		newParagraph.appendChild(arrayItemNode);
	}
};

