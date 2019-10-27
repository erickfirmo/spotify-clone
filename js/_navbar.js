$('.navbar-toggler').on('click', function() {
    if(!($(this).hasClass('active'))) {
        $(this).addClass('active');
        $('#navbar-filter').addClass('active');
        $('.mobile-navbar').addClass('active');
        $('body').css('overflow', 'hidden');
    } else {
        $(this).removeClass('active');
        $('#navbar-filter').removeClass('active');
        $('.mobile-navbar').removeClass('active');
        $('body').css('overflow', '');
    }
});

$(window).resize(function() {
    if($(this).width() < 992 && $('.navbar-toggler').hasClass('active')) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', '');
        //$('#navbar-filter').removeClass('active');
        //$('.mobile-navbar').removeClass('active');
    }

    if($(this).width() > 991) {
        //$('#navbar-filter').removeClass('active');
        //$('.navbar-toggler').removeClass('active');
    }
});
