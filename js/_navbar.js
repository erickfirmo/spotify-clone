$('.navbar-toggler').on('click', function() {
    if(!($(this).hasClass('active'))) {
        $(this).addClass('active');
        $('#navbar-filter').addClass('active');
        $('.mobile-navbar').addClass('active');
        $('body').css('overflow', 'hidden');
        
        $('.logo').css('opacity', '.25');
    } else {
        $(this).removeClass('active');
        $('#navbar-filter').removeClass('active');
        $('.mobile-navbar').removeClass('active');
        $('body').css('overflow', '');
        $('.logo').css('opacity', '1');

    }
});

$(window).resize(function() {
    if($(this).width() < 992 && $('.navbar-toggler').hasClass('active')) {
        $('body').css('overflow', 'hidden');
    } else {
        $('.navbar-toggler').removeClass('active')
        $('body').css('overflow', '');
        $('#navbar-filter').removeClass('active');
        $('.mobile-navbar').removeClass('active');
        $('body').css('overflow', '');
        $('.logo').css('opacity', '1');

        
    }
});
