$(document).ready(function () {
    let options = ['New England Patriots', 'San Francisco 49ers', 'Pittsburgh Steelers', 'Miami Dolphins', 'Oakland Raiders'];

    function displayGif() {
        let gif = $(this).attr('src', queryURL);
        let queryURL = 'api.giphy.com/v1/gifs/search?apikey=zuXwvRKYt5bBv7lIhceQMWBRqbp9XB76&q=' + teamName;
        $.get({
            url: queryURL,
        }).then(function (response) {
            options.forEach(element => {
                let teamDiv = $('<div>');
                let gifimage = response.images.downsized_large;
                let ratingDiv = $('<div>');
                let rating = reponse.rating;
            });
        })
    };
    function genButtons() {
        $('.gifDiplay').empty();
        for (let i = 0; i < options.length; i++) {
            let newBtn = $('<button>');
            newBtn.addClass('gifImage', 'gifStill');
            newBtn.text(options[i]);
            $('.buttonContainer').append(newBtn);
        }
    };
    $('#add-gif').on('click',function(event){
        event.PreventDefault();
        var newOption=$('#gif-input').val().trim();
        options.push(newOption);
        console.log(options);
        genButtons();
    });



    genButtons();

});