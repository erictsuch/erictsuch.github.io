$(document).ready(function (){
    $('#submit').click(function () {
        var a = $('#a').val();
        var b = $('#b').val();

        if (a == b) {
            $('#comparison').html('==');
        } else if (a < b) {
            $('#comparison').html('<');
        } else if (a > b) {
            $('#comparison').html('>');
        }
    })



})