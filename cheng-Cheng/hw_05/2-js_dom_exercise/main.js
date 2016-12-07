/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (remember: appendChild)


- Also, when a new item is added to the list, clear the input box.
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

Bonus:

When they click submit without typing anything, alert the user
"you must type in a value!"

*/

var submitButton = document.getElementById("new-thing-button");
submitButton.onclick = function(){
  event.preventDefault()
  var listItem = document.getElementById("new-thing").value;

    if(listItem === "") {
      window.alert("You must type in a value!")
    }
    else {
      var newList = document.createElement("LI");
      var textList = document.createTextNode(listItem);
      newList.appendChild(textList);
      document.getElementById("fav-list").appendChild(newList)
      document.getElementById("new-thing").value=''
    }
}
