(function ($) {
    "use strict";

    /*====== Sticky Header ======*/
    $(window).on("scroll", function () {
        var header = $(".site-header.sticky-header");
        var height = header.innerHeight();
        var scroll = $(this).scrollTop();
        if (scroll >= height) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
        if ($(this).scrollTop() >= 600) {
            $(".scroll-up").show(300);
        } else {
            $(".scroll-up").hide(300);
        }
    });

    /*====== Scroll Up Setting ======*/
    $(".scroll-up").on("click", function () {
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    /*====== Mousemove Parallax Setting ======*/
    $(window).on("mousemove", function (e) {
        var x = e.clientX;
        var y = e.clientY;
        x = x * 2;
        y = y * 2;
        $(".section-hero-3 .hero-image-inner").css("top", 0 + y / 99 + "px");
        $(".section-hero-3 .hero-image-inner").css("left", 0 + x / 80 + "px");
        $(".section-hero-3 .hero-box").css("top", 0 + y / 150 + "px");
        $(".section-hero-3 .hero-box").css("left", 0 + x / 150 + "px");
    });

    /*====== Paroller Js ======*/
    $(".paroller, [data-paroller-factor]").paroller();

    /*====== Magnigic Popup Js  ======*/
    $(".portfolio-gallery").magnificPopup({
        type: "image",
        delegate: ".portfolio-zoom a",
        closeBtnInside: false,
        closeOnContentClick: true,
        gallery: {
            enabled: true
        }
    });

    /*====== Wow Js Setting ======*/
    var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true
    });

    wow.init();

    /*====== Data Filters Setting ======*/
    $(".data-filters-links").on("click", "li", function () {
        var links = $(".data-filters-links li");
        var items = $(".data-filters-items li");
        var filter = $(this).attr("data-filter");
        links.removeClass("active");
        $(this).addClass("active");
        if (filter == "all") {
            items.show(600);
        } else {
            items.hide();
            $(".data-filters-items li[data-filter=" + filter + "]").show(600);
        }
    });

    /*====== Alerts ======*/
    $(".alert").on("click", ".alert-close", function () {
        $(this).parent().fadeOut(300);
    });

    /*====== Sidenav - Side Navigation Menu ======*/
    $(".site-header").on("click", ".button-open-sidenav", function () {
        $(".site-sidenav").addClass("active");
    });

    $(".site-sidenav").on("click", ".button-close-sidenav", function () {
        $(".site-sidenav").removeClass("active");
    });

    $(".site-sidenav .sidenav-menu .menu > li").on("click", function () {
        $(".site-sidenav .menu li").removeClass("open");
        $(this).addClass("open");
        $(".site-sidenav .mega-menu").hide();
        $(this).children(".mega-menu").show();
    });

    /*====== Owl Carousel Setting ======*/
    var owlEvent = function () {
        var i;
        var params = {
            items: 1,
            slideBy: 1,
            rtl: false,
            nav: false,
            loop: false,
            dots: false,
            center: false,
            autoplay: false,
            mouseDrag: true,
            margin: 0,
            dotsSpeed: 1500,
            smartSpeed: 1500,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            stagePadding: 0,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        };
        params.responsive = {
            0: {items: 1}
        };
        if (typeof $(this).data("breakpoint") != "undefined") {
            var j;
            var breakpoint = $(this).data("breakpoint").split(",");
            for (j in breakpoint) {
                var b = breakpoint[j].split(":");

                if (b.length == 2) {
                    params.responsive[b[0]] = {
                        items: parseInt(b[1])
                    };
                }
            }
        } else {
            params.responsive[768] = {
                items: params.items
            };
        }
        for (i in params) {
            var dtlc = i.toLowerCase();
            var data = $(this).data(dtlc);

            if (typeof data != "undefined") {
                params[i] = data;
            }
        }
        $(this).owlCarousel(params);
    };

    $(".owl-carousel").each(owlEvent);

})($);