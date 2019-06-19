$(document).ready(function() {

    message = "";
    var questionCount = localStorage.getItem('questionCount');
    var numCorrect = localStorage.getItem('numCorrect');

    // check to see if the user had already taken the test
    // if not, display an error; otherwise, continue with the quiz results
    if (questionCount == 0) {
        message = "ERROR: Please take the quiz first, silly! ";
        $('#resultmsg').html(message);
    } else {
        checkResults();
    }

    function checkResults() {
        // display the results here
        $('#questionscorrect').append(numCorrect);
        $('#aquestionstotal').append(questionCount);
    }

    localStorage.clear();

})
