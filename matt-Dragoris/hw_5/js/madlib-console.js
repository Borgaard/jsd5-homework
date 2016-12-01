var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var saved = [];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));
var outPut = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];




$('#create').on('click', function(){
	var random1 = Math.floor((Math.random() * startupX.length));
	var random2 = Math.floor((Math.random() * startupY.length));
	var outPut = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
	$('#xForY').text(outPut);
})

$('#save').on('click', function() {
	var $combo = $('#xForY').text()
	saved.push($combo)
});

$('#print').on('click', function() {
	$('#favorites').text(saved.join('\n'))
})