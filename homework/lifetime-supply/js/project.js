$(document).ready(function(){

    $('#click-me').click(function(){
        var age = $('#age').val();
        var maxAge = $('#max-age').val();
        var favDrink = $('#item').val();
        var perDay = $('#num-per-day').val();

        $('#solution').html(perDay * (365 * (maxAge - age)));
        $('#drink').html(favDrink);

        // console.log('#solution');
        
    })

})

// Store your current age into a variable
// Store a maximum age into a variable
// Store a favorite drink (from a drop-down) into a variable
// Store an amount per day into a variable
// Calculate how much you would drink for the rest of your life!
// Output your results to the user