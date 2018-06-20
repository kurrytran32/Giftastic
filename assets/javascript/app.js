// //personal api key
let APIKEY = 'GIm3UiSv15lSaX4ahu1AiJYPlqSjP6wX';

//adding more buttons
//setting to get the value from search bar when submit is clicked
$('#submitbtn').on('click', function () {
    event.preventDefault();
    let $userWord = $('input:text').val();
    let $userbtn = $('<button>')

    $userbtn.text($userWord)
    $userbtn.attr('class', 'jiffy');
    $userbtn.attr('data-muppet', $userWord);
    $('#gifTags').append($userbtn);

    $('input:text').val("");


});

//event listener for buttons to add gifs to page
$(document).on('click', '#gifTags .jiffy', function () {
    $('#gif-holder').empty();
    let gifTerm = $(this).attr('data-muppet');
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifTerm + "&api_key=" + APIKEY + "&limit=10&rating=g";
    $.ajax({

        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        //console logs the response from the ajax request so we can pick out what we want from the JSON data object
        console.log(response);
        let results = response.data
        //for loop to run through the response data array and grabbing specific items
        for (let i = 0; i < results.length; i++) {

            //doesnt take results that are rated r or pg13
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                //put rating into variable for easier calling
                let rated = results[i].rating;
                //setting a variable to make creating a div dynamically easier
                let $gifDiv = $('<div class="gifs">')
                //structure where the rating will go
                let $p = $('<p>').text("Rating: " + rated);
                //setting the image tag to variable for easier calling
                let $jif = $('<img>');
                //giving the image tag attributes for the src image
                $jif.attr('src', results[i].images.fixed_height_still.url);
                $jif.attr('class', 'picture');
                $jif.attr('data-state', 'still');
                $jif.attr('data-animate', results[i].images.fixed_height.url);
                $jif.attr('data-still', results[i].images.fixed_height_still.url);
                //piecing together the gif div
                $gifDiv.append($jif);
                $gifDiv.append($p);
                
                $('#gif-holder').prepend($gifDiv);
            }
        }
    });

});

$(document.body).on('click', '.picture', function () {
    let state = $(this).attr('data-state');
    console.log(2);
    console.log(state);
    if (state === 'still') {
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state', 'still');
    }
});
