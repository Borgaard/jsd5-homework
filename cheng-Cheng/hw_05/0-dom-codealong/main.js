var addContent = document.getElementById('add-content');

// window.onload = function(){
addContent.onclick = function(){
  var mainHeading = document.createElement("h1");
  var headingText = document.createTextNode("DOM manipulator");
  mainHeading.appendChild(headingText);
  document.body.appendChild(mainHeading);
};

window.onload = function(){
  addContent.className = "button-branding";
  var campusesContainer = document.getElementById("gaCampuses");
  var gaCampuses = campusesContainer.getElementsByTagName("li");
  for (var i = 0; i < gaCampuses.length; i++) {
    gaCampuses[i].className = "list-elements";
  }
};
