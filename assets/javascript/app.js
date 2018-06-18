//personal api key
let APIKEY = 'GIm3UiSv15lSaX4ahu1AiJYPlqSjP6wX';

//structuring query url so that it fits in whatever api i set and dynamically searches based on user input
// let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=" + APIKEY + "&limit=5";


//setting to get the value from search bar when submit is clicked
$('button:submit').on('click', function () {
    //might have to push into array and join by "+" because of url formatting
    let userSearch = $('input:text').val();

    //structuring query url so that it fits in whatever api i set and dynamically searches based on user input
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=" + APIKEY + "&limit=5&rating=g";

    console.log(userSearch)
    //clears the search bar to indicate search is logged
    $('input:text').val("");

    //might end up having to put all of ajax calling into submit button onclick listener because it will activate when the submit button is clicked
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        //console logs the response from the ajax request so we can pick out what we want from the JSON data object
        console.log(response);
            let results = response.data
        //for loop to run through the response data array and grabbing specific items
        for( let i=0; i < results.length; i++ ){
            //put rating into variable for easier calling
            let rated = results[i].rating;
            //setting a variable to make creating a div dynamically easier
            let $gifDiv = $('<div class="gifs">')
            //structure where the rating will go
            let $p = $('<p>').text("Rating: " + rated);
            //setting the image tag to variable for easier calling
            let $jif = $('<img>');
            //giving the image tag attributes for the src image

        }
        
    });


});
