$(document).ready(function () {

    $('#myForm').submit(function(event){
        event.preventDefault();
        
        console.log('hooray!' , $('#name-input').val());
    })

})
 