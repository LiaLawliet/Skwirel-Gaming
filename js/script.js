$(document).ready(function () {
    $(document).on("scroll", function () {
        if ($(window).scrollTop() != 0) {
            $('header').addClass('black');
        }

        else {
            $('header').removeClass('black');
        }
    })
    let height = $('.navbar').height();
    $('#myMain').css('margin-top', function () {
        return height;
    });
})