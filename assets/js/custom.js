$(function() {
    // проверка начальной позиции анимированных блоков - на 1м экране первые блоки анимация должна запускаться сразу, без скролла - так как блок(и) находятся в зоне видимости сразу
    if ($('.animated-block').length) {
        var anim = $('.animated-block');
        anim.each(function(){
            var windowPostition = $(window).scrollTop();
            var posit = $(this).offset().top - 500;
            if (windowPostition >= posit) {
                $(this).addClass('fadeInUp');
            }
        });
    }
    if ($('.letters').length) {
        var stroke = $('.letters__wrap');
        stroke.each(function(){
            var windowPostition = $(window).scrollTop();
            var posit = $(this).offset().top - 500;
            if (windowPostition >= posit) {
                $(this).addClass('lettersUp');
            }
        });
    }


});

$(window).scroll(function(){
    if ($('.animated-block').length) {
        var anim = $('.animated-block');
        anim.each(function(){
            var windowPostition = $(window).scrollTop();
            var posit = $(this).offset().top - 480;
            if (windowPostition >= posit) {
                $(this).addClass('fadeInUp');
            }
        });
    }
    if ($('.letters').length) {
        var stroke = $('.letters__wrap');
        stroke.each(function(){
            var windowPostition = $(window).scrollTop();
            var posit = $(this).offset().top - 480;
            if (windowPostition >= posit) {
                $(this).addClass('lettersUp');
            }
        });
    }
});