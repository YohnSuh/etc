$(window).resize(function() {
    $('.gnbTit').click(function() {
        if($(window).innerWidth() > 786) {
            $('.navBg').css({'display' : 'block'});
            $(this).toggleClass('active');
            $(this).next().toggleClass('active');
            $(this).parent().siblings().find('.gnbTit').removeClass('active');
            $(this).parent().siblings().find('.inner').removeClass('active');
        } else {
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.inner').stop().slideUp();
        }
    });
}).resize();
