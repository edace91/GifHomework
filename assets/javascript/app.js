// Initial array of Queens
var topics = ['Kim Chi', 'Raja', 'Bianca del Rio', 'Latrice Royale'];

function renderButtons(){

		// Deletes the queens prior to adding new queens (this is necessary otherwise you will have repeat buttons)
		$('#queenButtons').empty();

		// Loops through the array of queens
		for (var i = 0; i < topics.length; i++){

			// Then dynamicaly generates buttons for each queen in the array

			// Note the jQUery syntax here...
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('queen'); // Added a class
		    a.data('person', topics[i]); // Added a data-attribute
		    a.text(topics[i]); // Provided the initial button text
		    $('#queenButtons').append(a); // Added the button to the HTML
		}
	}

$('#addQueen').on('click', function(){

		// This line of code will grab the input from the textbox
		var queen = $('#queen-input').val().trim();

		// The queen from the textbox is then added to our array
		topics.push(queen);

		// Our array then runs which handles the processing of our Queens array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	})

// click listener for user input to start the GIF render function
//When the user clicks on a button, the page should grab 10 static, 
//non-animated gif images from the GIPHY API and place them on the page

$('#queenButtons').on('click','.queen', function(){
    var q = $(this).data('person'); 
    console.log(q);

    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ q +"&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
     	console.log(queryURL);

        console.log(response)
        var results = response.data;

        for (var i=0; i < results.length; i++) {

            if (results[i].rating == "r" || results[i].rating == "pg-13")
            {

            }
            else {
                var gifDiv = $('<div class="item">')

                var rating = results[i].rating;

                var p = $('<p>').text( "Rating: " + rating);

                var queenImage = $('<img>');
                queenImage.attr('src', results[i].images.fixed_height.url);

                gifDiv.append(p)
                gifDiv.append(queenImage)

                $('#queenGifs').prepend(gifDiv);
            }
         }
    });
}); 

//When the user clicks one of the still GIPHY images, the gif should animate. 
//If the user clicks the gif again, it should stop playing.
$('#queenGifs').on('click', function(){
	$(queenImage).html('src', results[i].images.fixed_height.url);
});	


$(document).on('click', '.queen');
renderButtons();