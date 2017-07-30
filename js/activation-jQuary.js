(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        var wWidth = $(window).width();


        //-----menu------
        $(".nav-wrapper > ul > li, ul.dropdown li").on("mouseenter mouseleave", function () {
            $(this).toggleClass("dropdwon");
        });
        $(".pixinav .search_button, .pixinav .search-close").on("click", function () {
            $('.search-form').toggleClass('search-open');
        });
        $('.responsive-nav .nav-icon, .responsive-nav .nav-button-close').on("click", function () {
            $('.nav-wrapper').toggleClass('right-canvas');
        });

        $(".responsive-nav ul.dropdown ").on("click", function (e) {
            e.stopPropagation();
        });
        $('.responsive-nav .nav-wrapper  ul  li').on("click", function () {
            $(this).children('.mega_menu').slideToggle().css({
                "display": "flex"
            });
            $(this).children('ul').slideToggle();

        });
        $(".responsive-nav .nav-wrapper ul  li  a").on("click", function () {
            $(this).toggleClass("icon_rotated");
        });

        //----------vanubox----------
        $('.watch_video').venobox();
        $('#portfolio_vid').venobox();


        /*--------parallax--------*/
        if (wWidth > 767) {
            $('.hero_area_v6').parallax("50%", 0.3);
            $('.drone_feature_section').parallax("50%", 0.3);
            $('.drone_video_section').parallax("50%", 0.3);
            $('.newsletter_section').parallax("50%", 0.3);
        }
        
        //--------mixitup active----------
        $('#ecogallery').mixItUp({
            animation: {
                effects: 'fade'
            }
        });


    });



    /* ---------------------
    Mouse Move
    ----------------------- */
    $('.hero_area_v8').mousemove(function (e) {
        var x = -(e.pageX + this.offsetLeft) / 50;
        var y = -(e.pageY + this.offsetTop) / 50;
        $(this).css('background-position', x + 'px ' + y + 'px');
    });


    //------Adjusting the top nav showing the top nav when scrolling >= 53----
    var wHight = $(window).height();
    $(window).on('scroll', function () {
        var check = $('#logo2');
        if ($(this).scrollTop() >= 1) {
            $("#header").addClass("sticked");
        } else {
            $("#header").removeClass("sticked");
        }

        if (wWidth > 767) {
            if ($(this).scrollTop() >= wHight) {
                $("#category_fixed").addClass("sticked");
                $(".topCourse_section").addClass("stickMargin");
            } else {
                $("#category_fixed").removeClass("sticked");
                $(".topCourse_section").removeClass("stickMargin");
            }
        }
    });


    //-------testimonial carousel-------
    $(".testimonial_wrapper, .testimonial_wrapper_v2").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1200,
        autoplayTimeout: 3000
    });

    //-------case study v8 carousel-------
    $(".case_study_wrapper_8, .cln_testimonial_wrapper").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 4000
    });

    //-------client section carousel-------
    $(".client_wrapper").owlCarousel({
        items: 5,
        loop: true,
        dots: false,
        margin: 130,
        autoplay: false,
        smartSpeed: 900,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 200

            },
            480: {
                items: 3,
                margin: 50,

            },
            768: {
                items: 4,
                margin: 80,

            },
            992: {
                items: 5,
            }
        }
    });


    //-------course_carousel-------
    $(".topCourse_wrapper").owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay: false,
        smartSpeed: 900,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 110
            },
            480: {
                items: 1,

            },
            768: {
                items: 2,

            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });


    //------- real ested-------
    $(".listing_img_area").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay: true,
        smartSpeed: 900,
        autoplayTimeout: 6000,
        responsiveClass: true,
    });
    //------- real ested-------


    $(".recent_listing_wrapper").owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        mouseDrag: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay: false,
        smartSpeed: 900,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 110
            },
            480: {
                items: 1,

            },
            768: {
                items: 2,

            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });


    //------- realested-------
    $(".hero_carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay: true,
        smartSpeed: 900,
        autoplayTimeout: 3000,
        responsiveClass: true,
    });


    //-----nice select--------
    $('select').niceSelect();


    $('#cover').on('click', function () {
        $('.project_collups_wrapper').css({
            'bottom': '-50%'
        });
    });





    //--------Scroll Top---------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scroll_top').fadeIn();
            $('.scroll_top').removeClass('not_visible');
        } else {
            $('.scroll_top').fadeOut();
        }
    });
    $('.scroll_top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });



    //------Masonry active-----
    $(window).load(function () {
        if (wWidth > 767) {
            $('.all_service_section_v3 .service_wrapper').masonry({
                itemSelector: '.all_service_section_v3 .single_service',
            });

            $('#servieing_wrapper').masonry({
                itemSelector: '#servieing_wrapper > .col-md-4'
            });

            $('#work_wrapper').masonry({
                itemSelector: '#work_wrapper > .single_work'
            });
        }
    });

    //-------main slider active----
    $(".Modern-Slider").slick({
        autoplay: false,
        autoplaySpeed: 10000,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnDotsHover: true,
        fade: true,
        prevArrow: '<button class="PrevArrow"></button>',
        nextArrow: '<button class="NextArrow"></button>',
        draggable: 'true',
        arrows: true,
    });

    //=----Hide arrow--------
    var wWidth = $(window).width();
    if (wWidth < 767) {
        $('.slick-arrow').hide()
    }


}(jQuery));
