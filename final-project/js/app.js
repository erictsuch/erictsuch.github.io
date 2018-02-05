$('document').ready(function () {

    $('.hamburg').click(function () {
        
        $('.dropdown').slideToggle();

    })

    $(window).resize(function(){
		if ($(window).width() > '1024') {
            $('.hamburg').hide();
            $('.dropdown').hide();
            $('.large-nav').show();
		} else {
            $('.hamburg').show();
            $('.large-nav').hide();
        }
    })
   
})