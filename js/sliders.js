$('.slider-under').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// $(".slider-nav").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: true,
//     asNavFor: ".slider-for",
//     focusOnSelect: true,
//     centerMode: true,
//     appendDots: ".container_dots",

// })

$('.categories__gallery').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
    ]
})