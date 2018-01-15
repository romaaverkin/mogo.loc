$(function () {

    $('#my-menu').mmenu({
        extensions: ['effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: 'MoGo'
        },
        offCanvas: {
            position: 'right'
        }
    });

    var api = $('#my-menu').data('mmenu');
    api.bind('open:finish', function () {
        $('.hamburger').addClass('is-active');
    });
    api.bind('close:finish', function () {
        $('.hamburger').removeClass('is-active');
    });

    $('.carousel-services').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            },
            1920: {
                items: 4
            }
        }
    });

    $('select').selectize();

    $('.reviews').owlCarousel({
        loop: true, // зациклить карусель
        items: 1,
        smartSpeed: 700,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });

    //E-mail Ajax Send
    $("form.callback").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "/mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
            // alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.find('.success').removeClass('active').fadeOut();
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });


});
