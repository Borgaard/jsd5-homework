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

var newQuestion = $('#addQuestion')
var $surveyList = $('#surveyList')
function removeButton(){
  $('button').on('click', function(){
  // console.log($(this).parent);
  $(this).parent().remove();
})};

function addToSurvey($question, text) {
  var $questionLi = $('<li>').html('<label>' + text + '</label>' + ' <input type="text" class="form-control">' + ' <button type="button">Remove question</button>');
  // var $label = $('<label>').text(text);
  // var $input = $('<input>').addClass('form-control')
  // $newThingLi.append(' <a class="complete" href="#completeTask">Complete Task</a>');
  $question.append($questionLi);
  // $newQuestionLi.addClass('form-group padout');
  $('li').removeClass('form-group padout').addClass('form-group padout');
  removeButton();
  $('#question').val('');
}

newQuestion.on('click', function(event){
  event.preventDefault();
  // var check = $('#question').val()
  // console.log(check);
  if ($('#question').val() === ''){
    window.alert('Please enter a new question before submitting!')
  } else {
    var questionText = $('#question').val();
    // console.log(questionText);
    addToSurvey($surveyList, questionText);
    // console.log('success')
  }
});

$('#surveyList li').each(function() {
    var $removeButton = $('<button type="button">').html("Remove question");
    $(this).append($removeButton);
    removeButton();
});
