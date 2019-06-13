$(document).ready(function() {

    var inputAnswer = "";
    var currentQuestion = [];

    // detects if the user has started up the quiz using a regular method
    // if not, displays an error; otherwise, starts the quiz
    if (totalQuestions == 0) {
        $('#content').empty();
        $('#content').html("ERROR: Quiz has not been set up yet.");
    } else {
        displayQuestion();
    }
    
function displayQuestion() {
    // first, reset the page values
    $('#currentquestion').html(numAnswered + 1);
    $('#totalquestion').html(totalQuestions);
    $('#category').empty();
    $('#content').empty();


    $.ajax({
        url: "http://jservice.io/api/random"
    }).then(function(data) {
        // get some data from the api and push it into an array
        currentQuestion.push(data[0].value);
        currentQuestion.push(data[0].category.title);
        currentQuestion.push(data[0].question);
        currentQuestion.push(data[0].answer);

        testConditions(currentQuestion, difficulties);

        // display content into the web page
        $('#category').html(currentQuestion[1]);
        $('#content').html(currentQuestion[2]);

    });

    function testConditions(testArray, difficulties) {
        // TODO: test the category conditions and grab new question if it does not match
    }

    // write a button to the document to check question
    checkQuestion();
}

function checkQuestion() {
    // increments answered question amount by one
    numAnswered++;

    // get the input string from the page
    // inputAnswer = ;

    // if the input was correct, increment the number of correct answers
    if (inputAnswer.trim().toLowerCase() === currentQuestion[3].trim().toLowerCase()) {
        numCorrect++;
    }

    // TODO: highlight correct answer

    if (numAnswered == totalQuestions) {
        // display button that leads to result screen
    } else {
        // display next button
    }
}

    // $.ajax({
    //     url: "http://jservice.io/api/random"
    // }).then(function(data) {
    // $('#question').append(data[0].question);
    // $('#value').append(data[0].value);
    // $('#answer').append(data[0].answer);
    // $('#category').append(data[0].category.title);
    // });
})