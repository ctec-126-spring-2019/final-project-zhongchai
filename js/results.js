$(document).ready(function() {

    message = "";

    // check to see if the user had already taken the test
    // if not, display an error; otherwise, continue with the quiz results
    if (numAnswered == 0) {
        message = "ERROR: Please take the quiz first, silly! ";
        $('#resultmsg').html(message);
    } else {
        checkResults();
    }

    function checkResults() {
        // display the results here
    }

})
