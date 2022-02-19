jQuery( document ).ready(function($) {
    if($('.rates-tabs').length) {
        $(".rates-tabs").easyResponsiveTabs({
            type: 'default', //Типы: default, vertical, accordion
            width: 'auto', //auto или любое значение ширины
            fit: true,   // 100% пространства занимает в контейнере
            activate: function() {} // Функция обратного вызова, используется, когда происходит переключение вкладок
        });
    }
    if($('.slider__items').length) {
        $('.slider__items').slick({
            slidesToShow: 3,
            dots: true,
            arrows: true,
            infinite: false,
            responsive: [
            {
                breakpoint: 769,
                settings: {
                arrows: true,
                slidesToShow: 2
                }
            },
            {
                breakpoint: 577,
                settings: {
                arrows: false,
                slidesToShow: 1,
                adaptiveHeight: true
                }
            }
            ]
        });
    }
});