$(document).ready(() => {
    let product = $('.product-item');
    let product1 = $($(product)[0]);
    let product3 = $($(product)[3]);
    let product4 = $($(product)[4]);
    let product5 = $($(product)[5]);
    let productMore = $('#products-btn-more');
    let productClose = $('#products-btn-close')
    let errorMessage = $('.error-message');
    let burgundyBtn = $('.burgundy-btn');


    product3.css('display', 'none')
    product4.css('display', 'none')
    product5.css('display', 'none')

    productMore.click(() => {
        product3.fadeIn();
        product4.fadeIn();
        product5.fadeIn();
        productMore.css('display', 'none');
        productClose.css('display', 'block');
    })

    productClose.click(() => {
        product3.fadeOut();
        product4.fadeOut();
        product5.fadeOut();
        productClose.css('display', 'none');
        productMore.css('display', 'block');
        $('html, body').animate({
            scrollTop: product1.offset().top  // класс объекта к которому приезжаем
        }, 800); // Скорость прокрутки
    });

    // Инициализация карусели со счетчиком в 9-ом блоке

    let $status = $('.pagingInfo');
    let $slickElement = $('#reviews-carousel');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + ' ' + '/' + ' ' + slick.slideCount);
    });

    $slickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        arrows: true,
    });

    // Валидация заявки в восьмом блоке

    $($(burgundyBtn)[3]).click(() => {
        let requestName = $('#request-name');
        let requestPhone = $('#request-phone');

        if (requestName.val() && requestPhone.val()) {
            errorMessage.hide();
            requestName.css('border-color', '#202020');
            requestPhone.css('border-color', '#202020');
            // $.ajax({
            //         type: 'post',
            //         url: 'mail.php',
            //         data: '&name=' + requestName.val() + '&phone=' + requestPhone.val(),
            //         success: () => {
            //             $('#request-form').hide();
            //             $('#request-successes').show();
            //         },
            //         error: () => {
            //             alert('Ошибка запроса, неподалки с сервером.')
            //         }
            //     });
            $('#request-form').hide();
            $('#request-successes').show();
            $('#pop-up-request-content').hide();
            $('#pop-up-successful-content').show();
        } else {
            if (!requestName.val()) {
                $(errorMessage[0]).show();
                requestName.css('border-color', 'red');
            } else {
                $(errorMessage[0]).hide();
                requestName.css('border-color', '#202020');
            }
            if (!requestPhone.val()) {
                $(errorMessage[1]).show();
                requestPhone.css('border-color', 'red');
            } else {
                $(errorMessage[1]).hide();
                requestPhone.css('border-color', '#202020');
            }
        }
    });

    // Скрипт на открытие поп-апов

    $('.open-pop-up').click(() => {
        $('#pop-up').fadeIn().css('display', 'flex');
    })

    // Скрипт для закрытия поп-апа

    $('#pop-up').click((e) => {
        if (e.target.id === 'pop-up' || e.target.id === 'pop-up-close') {
            $('#pop-up').fadeOut();
        }
    });

    // Валидация полей в поп-апе

    $($(burgundyBtn)[4]).click(() => {
        let popUpName = $('#pop-up-name');
        let popUpPhone = $('#pop-up-phone');

        if (popUpName.val() && popUpPhone.val()) {
            errorMessage.hide();
            popUpName.css('border-color', '#202020');
            popUpPhone.css('border-color', '#202020');
            // $.ajax({
            //         type: 'post',
            //         url: 'mail.php',
            //         data: '&name=' + popUpName.val() + '&phone=' + popUpPhone.val(),
            //         success: () => {
            //             $('#pop-up-request-content').hide();
            //             $('#pop-up-successful-content').show();
            //         },
            //         error: () => {
            //             alert('Ошибка запроса, неподалки с сервером.')
            //         }
            //     });
            $('#pop-up-request-content').hide();
            $('#pop-up-successful-content').show();
            $('#request-form').fadeOut();
            $('#request-successes').fadeIn();
        } else {
            if (!popUpName.val()) {
                $(errorMessage[2]).show();
                popUpName.css('border-color', 'red');
            } else {
                $(errorMessage[2]).hide();
                popUpName.css('border-color', '#202020');
            }
            if (!popUpPhone.val()) {
                $(errorMessage[3]).show();
                popUpPhone.css('border-color', 'red');
            } else {
                $(errorMessage[3]).hide();
                popUpPhone.css('border-color', '#202020');
            }
        }
    });

    $($(burgundyBtn)[5]).click(() => {
        $('#pop-up').hide();
    })

    // Карусель первого каталога

    let openPopUpProducts = $('.product-item-more');
    let carousel = $('.pop-up-carousel');
    let carouselNav = $('.products-nav');
    let pagingProducts = $('.pagingInfoProducts');
    let productCarousel = $('.products-carousel')

    $($(openPopUpProducts)[0]).click(() => {
        $('#products-axiom').fadeIn();
        productCarousel.slick('refresh');
        carouselNav.slick('refresh');
    })

    productCarousel.on('init reInit afterChange', function (event, slick, currentSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        pagingProducts.text(i + ' ' + '/' + ' ' + slick.slideCount);
    });

    $('#products-axiom .products-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        fade: true,
        speed: 1000,
        asNavFor: '#products-axiom .products-nav'
    });
    $('#products-axiom .products-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        asNavFor: '#products-axiom .products-carousel',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        speed: 1000,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // Карусель второго каталога проекта

    $('#products-wellhouse .products-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        fade: true,
        speed: 1000,
        asNavFor: '#products-wellhouse .products-nav'
    });
    $('#products-wellhouse .products-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        asNavFor: '#products-wellhouse .products-carousel',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        speed: 1000,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $($(openPopUpProducts)[1]).click(() => {
        $('#products-wellhouse').fadeIn();
        productCarousel.slick('refresh');
        carouselNav.slick('refresh');
    })

    // Карусель третьего каталога проекта

    $('#products-arbat .products-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        fade: true,
        speed: 1000,
        asNavFor: '#products-arbat .products-nav'
    });
    $('#products-arbat .products-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        asNavFor: '#products-arbat .products-carousel',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        speed: 1000,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $($(openPopUpProducts)[2]).click(() => {
        $('#products-arbat').fadeIn();
        productCarousel.slick('refresh');
        carouselNav.slick('refresh');
    })

    // Карусель четвертого каталога

    $('#products-barvikha .products-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        fade: true,
        speed: 1000,
        asNavFor: '#products-barvikha .products-nav'
    });
    $('#products-barvikha .products-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        asNavFor: '#products-barvikha .products-carousel',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        speed: 1000,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $($(openPopUpProducts)[3]).click(() => {
        $('#products-barvikha').fadeIn();
        productCarousel.slick('refresh');
        carouselNav.slick('refresh');
    })

    // Карусель пятого каталога проекта

    $('#products-dominion .products-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        fade: true,
        speed: 1000,
        asNavFor: '#products-dominion .products-nav'
    });
    $('#products-dominion .products-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        asNavFor: '#products-dominion .products-carousel',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        speed: 1000,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $($(openPopUpProducts)[4]).click(() => {
        $('#products-dominion').fadeIn();
        productCarousel.slick('refresh');
        carouselNav.slick('refresh');
    })

    // Карусель шестого каталога

    $('#products-capital .products-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        fade: true,
        speed: 1000,
        asNavFor: '#products-capital .products-nav'

    });
    $('#products-capital .products-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        asNavFor: '#products-capital .products-carousel',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        speed: 1000,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $($(openPopUpProducts)[5]).click(() => {
        $('#products-capital').fadeIn();
        productCarousel.slick('refresh');
        carouselNav.slick('refresh');
    })

//    Скрипт закрытия каруселей

    carousel.click((e) => {
        if (e.target.className === 'pop-up-carousel') {
            $('#products-axiom').fadeOut();
            $('#products-wellhouse').fadeOut();
            $('#products-arbat').fadeOut();
            $('#products-barvikha').fadeOut();
            $('#products-dominion').fadeOut();
            $('#products-capital').fadeOut();
        }
    });

    $('.close-block').click(() => {
        $('#products-axiom').fadeOut();
        $('#products-wellhouse').fadeOut();
        $('#products-arbat').fadeOut();
        $('#products-barvikha').fadeOut();
        $('#products-dominion').fadeOut();
        $('#products-capital').fadeOut();
    })

    // Открытие и закрытие меню в хеадере и футере для разрешения смартфонов

    $(window).on('resize', function () {
        if ($(window).width() < 1023) {
            $('.header-items').click((e) => {
                if (e.target.className === 'header-footer-item' || e.target.id === 'close-header-menu') {
                    $('.header-items').fadeOut();
                }
            });

            $('#footer-close').click(() => {
                $('#footer-items').fadeOut();
            })
        }
    });

    $('#menu-icon').click(() => {
        $('.header-items').fadeIn().css('display', 'flex');
    })

    $('#footer-menu').click(() => {
        $('#footer-items').fadeIn().css('display', 'flex');
    })



    $(window).on('resize', function () {
        if ($(window).width() < 769) {
            $('#footer-items').click((e) => {
                if (e.target.className === 'header-footer-item') {
                    $('#footer-items').fadeOut();
                }
            });
        }
    });

    new WOW().init()
});



