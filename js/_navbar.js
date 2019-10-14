$('.navbar-toggler').on('click', function() {
    if(!($(this).hasClass('active'))) {
        $(this).addClass('active');
        $('#responsive-navbar').addClass('active');
        $('body').css('overflow', 'hidden');
    } else {
        $(this).removeClass('active');
        $('#responsive-navbar').removeClass('active');
        $('body').css('overflow', '');
    }
});

$(window).resize(function() {
    if($(this).width() < 992 && $('.navbar-toggler').hasClass('active')) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', '');
    }
    if($(this).width() > 991) {
        $('#responsive-navbar').removeClass('active');
        $('.navbar-toggler').removeClass('active');
    }
});
