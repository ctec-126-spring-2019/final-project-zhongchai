$(document).ready(function () {

    var questionCount = 0;
    var numCorrect = 0;
    var difficulty = "";
    var currentQuestion = [];

    // hides the main quiz module upon load
    $('#quiz').hide();

    // audio controls
    $(".my_audio").trigger('load');

    var play_audio = function (task) {
        if (task == 'play') {
            $(".my_audio").trigger('play');
        }
        if (task == 'stop') {
            $(".my_audio").trigger('pause');
            $(".my_audio").prop("currentTime", 0);
        }
    }

    // handles getting the question from the api and displaying it
    var runQuiz = function () {
        questionCount++;

        // first, reset the page values
        $('#currentquestion').html(questionCount);
        $('#category').empty();
        $('#difficulty').empty();
        $('#content').empty();
        $('#feedback').empty();
        $('#useranswer').val("");
        currentQuestion.length = 0;

        // start api call
        $.ajax({
            url: "http://jservice.io/api/random"
        }).then(function (data) {
            // get some data from the api and push it into an array
            currentQuestion.push(data[0].value);
            currentQuestion.push(data[0].category.title);
            currentQuestion.push(data[0].question);
            currentQuestion.push(data[0].answer);

            parseDifficulty(currentQuestion[0]);
            var correctAnswer = currentQuestion[3]

            // display content into the web page
            $('#category').html(currentQuestion[1].charAt(0).toUpperCase() + currentQuestion[1].slice(1));
            $('#difficulty').html(difficulty);
            $('#content').html(currentQuestion[2]);
        });
    }

    // called when the Start Quiz button is called
    // hides/shows elements, then runs the first question in the quiz
    $('#start').click(function () {
        runQuiz();
        $('#quiz-start').hide();
        $('#quiz').show();
    });

    // called when the New Question button is clicked
    $('#new').click(runQuiz);

    // called when the End Quiz button is clicked
    $('#end').click(function () {
        localStorage.setItem('questionCount', questionCount);
        localStorage.setItem('numCorrect', numCorrect);
    });

    // handles submission and checking of answer input
    $('#submit').click(function () {
        var inputAnswer = $("#useranswer").val();
        if (inputAnswer.trim().toLowerCase() === currentQuestion[3].trim().toLowerCase()) {
            numCorrect++;
            $('#feedback').html("Correct!");
        } else {
            $('#feedback').html("Sorry, the correct answer is: " + currentQuestion[3]);
        }
    });

    // function to turn the Jeopardy category difficulty numbers into readable words
    var parseDifficulty = function (key) {
        switch (key) {
            case 100:
            case 200:
                difficulty = "Very Easy";
                break;
            case 300:
            case 400:
                difficulty = "Medium";
                break;
            case 500:
            case 600:
                difficulty = "Hard";
                break;
            case 700:
            case 800:
                difficulty = "Very Hard";
                break;
            case 900:
            case 1000:
                difficulty = "Super Hard";
                break;
            default:
                difficulty = "Unknown";
                break;
        }
    }

});
