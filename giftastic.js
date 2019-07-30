$(document).ready(function () {
    let options = ['New England Patriots', 'San Francisco 49ers', 'Pittsburgh Steelers', 'Miami Dolphins', 'Oakland Raiders'];


    function displayGif() {
        let buttonName = $(this).attr('data-name');
        let queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + buttonName + '&limit=20&apikey=zuXwvRKYt5bBv7lIhceQMWBRqbp9XB76';
        
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            let responseArray = response.data;
            for (let i = 0; i < responseArray.length; i++) {
                let newDiv = $('<div>');
                let imgURL = response.data[i].images.original.url;
                let gifDiv = $('<img>').attr('src', imgURL);
                let ratingDiv = $('<div>');
                ratingDiv.text('Rated:' + response.data[i].rating);
                newDiv.append(gifDiv, ratingDiv);
                $('.gifDisplay').prepend(newDiv);
            }
        });
    };
    function genButtons() {
        $('.buttonContainer').empty();
        for (let i = 0; i < options.length; i++) {
            let newBtn = $('<button>');
            newBtn.addClass('gifImage', 'gifStill');
            newBtn.attr('data-name', options[i]);
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

    $(document).on('click', '.gifImage', displayGif);




    genButtons();

});