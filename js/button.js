$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });
    
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    
});