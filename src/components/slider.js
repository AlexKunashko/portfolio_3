export const slider = () =>
    $(document).ready(function () {
        $('.our-work__inner-slider').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow:
                '<button  type="button" class="arrow-arrow arrow-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
            prevArrow:
                '<button  type="button" class="arrow-arrow arrow-left"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        })
        $('.feedback__carousel').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            nextArrow:
                '<button type="button" class="arrow-arrow arrow-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
            prevArrow:
                '<button type="button" class="arrow-arrow arrow-left"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        })
    })
