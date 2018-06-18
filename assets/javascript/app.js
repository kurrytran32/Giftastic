//setting to get the value from search bar when submit is clicked
$('button:submit').on('click', function(){
    //might have to push into array and join by "+" because of url formatting
    userSearch = $('input:text').val();
    console.log(userSearch)
    //clears the search bar to indicate search is logged
    $('input:text').val("");
    
})
//empty variable to store user search term
let userSearch = 0;

//personal api key
let APIKEY = 'GIm3UiSv15lSaX4ahu1AiJYPlqSjP6wX';

//structuring query url so that it fits in whatever api i set and dynamically searches based on user input
let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key="+ APIKEY + "&limit=5";

//might end up having to put all of ajax calling into submit button onclick listener because it will activate when the submit button is clicked
$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {
    //console logs the response from the ajax request so we can pick out what we want from the JSON data object
    console.log(response);

})