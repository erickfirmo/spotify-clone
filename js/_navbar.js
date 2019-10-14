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

