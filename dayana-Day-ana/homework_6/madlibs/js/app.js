var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1, random2;
var title = document.getElementById("xForY");
var createBtn = document.getElementById("create");
var saveBtn = document.getElementById("save");
var printBtn = document.getElementById('print');
var faves = document.getElementById('favorites');


createBtn.onclick = function(){

	clearTitle();
	title.innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
}

function clearTitle(){
	title.innerHTML = "";
	random1 = Math.floor((Math.random() * startupX.length));
	random2 = Math.floor((Math.random() * startupY.length));
}

saveBtn.onclick = function(){
	if(title.innerHTML !== ""){
		var faveNode = document.createElement('p');
		var faveText = document.createTextNode("\u2665 " + title.innerHTML)
		faveNode.appendChild(faveText)
		faves.appendChild(faveNode)
	}else{
		alert('You must first create a start up!!')
	}
}

printBtn.onclick = function(){
	if(title.innerHTML !== ""){
		window.print();
	}
}
