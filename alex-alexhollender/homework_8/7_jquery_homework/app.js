/*
Create a customizable survey form.
A user should be able to type a survey question in a text box.
When the user adds the question to the survey, it should be automatically numbered and a text box should be added below it.
The form includes 2 sample questions as illustrations.
Each survey question should also include a "Remove question" button that a user can click to remove the question from the survey.

Your final code should do the following:
- Convert the existing code to use implicit iteration
- Implement at least one example of event delegation
- Chain at least 2 methods

Note: This project uses Bootstrap, which is a CSS framework that provides prebuilt styles using class names.
Make sure the new questions you add to the survey use the same class names as in the sample form questions to take advantage of Bootstrap styles.
*/

// Function that generates a new survey question, where x is set to the value of the input field
var newQuestion = function(x) {
	$('ol').append(
	  '<li class="form-group padout">' + 
      '<label>' + x + '</label>' + 
      '<input type="text" class="form-control">' +
      '<input type="button" value="Remove question" class="remove">'
    );
};

var $removeButton = $('<input type="button" value="Clear field" class="clear off">' + '<input type="button" value="Remove question" class="remove">');

$(document).ready(function() {

	// Using implicit iteration to add a remove button to any existing form questions
	$("#surveyList li").append($removeButton);
    
    // Function that runs when you click Add to Survey
    $('input#addQuestion').on('click', function() {
    	var $captureInput = $('input#question').val();
    	if ($captureInput === '') {
    		alert("You need to enter a question first");
    	} else {
    		newQuestion($captureInput);
    		$('input#question').val('');
    	}
    });

    // Function that clears a response
    $('ol#surveyList').on('click', 'input.clear', function() {
    	$(this).siblings('input.form-control').val('');
    	$(this).addClass('off');
    });

    // Function that removes a question from the form
    $('ol#surveyList').on('click', 'input.remove', function() {
    	$(this).parent('li').remove();
    });

    // Function that checks to see if there is anything in the first question's response box
     $('input.form-control.one').keyup(function() {
	  var $formInput = $('input.form-control.one').val();
	  var $formInputLength = $formInput.length;
	  if ($formInputLength === 0) {
	  	$(this).siblings('input.clear').addClass('off');
	  } else {
	  	$(this).siblings('input.clear').removeClass('off');
	  }
	});

});

