var addContent = document.getElementById("add-content");

// window.onload = function() {}
addContent.onclick = function() {
	var mainHeading = document.createElement("h1");
	var headingText = document.createTextNode("DOM manipulation");
	mainHeading.appendChild(headingText);
	document.body.appendChild(mainHeading);
};


// Show and hide on hover
// Show and hide on hover
addContent.onmouseover = function() {
    var mainHeading = document.createElement("h1");
    var headingText = document.createTextNode("Hover!");
    mainHeading.appendChild(headingText);
    document.body.appendChild(mainHeading);
  
  addContent.onmouseout = function() {
      document.body.removeChild(mainHeading);
  };
};

window.onload = function () {
	addContent.className = "button-branding";
	var campusesContainer = document.getElementById("gaCampuses");
	var gaCampuses = campusesContainer.getElementsByTagName("li");
	for (var i = 0; i < gaCampuses.length; i++) {
		gaCampuses[i].className = "list-elements"
	}
};

