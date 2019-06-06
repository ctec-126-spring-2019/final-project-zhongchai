$(document).ready(function() {
    $.ajax({
        url: "http://jservice.io/api/random"
    }).then(function(data) {
       $('#question').append(data[0].question);
       $('#value').append(data[0].value);
       $('#answer').append(data[0].answer);
       $('#category').append(data[0].category.title);
    });
});
