$(function () {
    //zmiana koloru menu nav kiedy scrollujemy brakePoint 100px
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".navbar").css("background-color", "white");
            $(".nav-link").css("color", "black");
        } else {
            $(".navbar").css("background-color", "");
            $(".nav-link").css("color", "white");
        }


    });

    //smooth scrolling 

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});
