var addContentButton = document.getElementById("add-content");
var changeClassButton = document.getElementById("change-class");
var allLis = document.querySelectorAll("li");

// window.onload = function() {
addContentButton.onclick = function() {
	var mainHeading = document.createElement("h1");
	var headingText = document.createTextNode("DOM manipulation");
	mainHeading.appendChild(headingText);
	document.body.appendChild(mainHeading);
};

changeClassButton.onclick = function() {
	allLis.className = "list-elements";
};

/*
window.onload = function () {
	var campusesContainer = document.getElementById("gaCampuses");
	var gaCampuses = campusesContainer.getElementsByTagName("li");
	for (var i = 0; i < gaCampuses.length; i++) {
		gaCampuses[i].className = "list-elements";
	}
}
*/