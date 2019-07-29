$(document).ready(function () {
    let options = ['New England Patriots', 'San Francisco 49ers', 'Pittsburgh Steelers', 'Miami Dolphins', 'Oakland Raiders'];
      
    
    // function displayGif() {
    //     let teamName=$(this).attr('data-name');
    //     let queryURL = 'https://api.giphy.com/v1/gifs/search?apikey=zuXwvRKYt5bBv7lIhceQMWBRqbp9XB76&q='+teamName;
    //     let gif = $(this).attr('src', queryURL);    
    //     $.ajax({
    //         url: queryURL,
    //         method:'GET'
    //     }).then(function (response) {
    //         options.forEach(element => {
    //             let teamDiv = $('<div>');
    //             let gifimage = response.images.downsized.url;
    //             let ratingDiv = $('<div>');
    //             let rating = reponse.rating;
    //             teamDiv.append(gifimage);
    //             ratingDiv.append(rating);
    //             $('.gifDisplay').append(teamDiv,ratingDiv);

    //         });
    //     });
    // };
    function genButtons() {
        $('.buttonContainer').empty();
        for (let i = 0; i < options.length; i++) {
            let newBtn = $('<button>');
            newBtn.addClass('gifImage', 'gifStill');
            newBtn.attr('data-name',options[i]);
            newBtn.text(options[i]);
            $('.buttonContainer').append(newBtn);
        };
    };
    $('#add-gif').on('click', function (event) {
        event.preventDefault();
        var newOption = $('#gif-input').val().trim();
        options.push(newOption);
        genButtons();
    });

    // $(document).on('click','.gifImage', displayGif);




    genButtons();

});