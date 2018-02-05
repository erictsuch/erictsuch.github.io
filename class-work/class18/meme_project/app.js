
$('.meme-form').submit(function () {
    event.preventDefault();

    $('.video-wrapper').empty();

    var userInput = $('.meme-input').val();

    //javascript, jQuery
    var xhr = $.get(
        "http://api.giphy.com/v1/gifs/search?q=" + userInput + "+shiba+inu&api_key=60PGmWkeJc6NK1kI5fxJLhewR2hON6ix&limit=5"
    );
    xhr.done(function (data) {
        var memes = data.data;

        memes.forEach(function(meme){
            var memeUrl = meme.images.looping.mp4;

            $('.video-wrapper').append('<video src="' + memeUrl + '" autoplay loop></video>')
        })
    });
});