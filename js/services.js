! function (t) {
    "use strict";
    t(window).on("load", (function () {
        t(".preloader").fadeOut()
    })), t(".preloader").length > 0 && t(".preloaderCls").each((function () {
        t(this).on("click", (function (e) {
            e.preventDefault(), t(".preloader").css("display", "none")
        }))
    })), t.fn.asmobilemenu = function (e) {
        var a = t.extend({
            menuToggleBtn: ".as-menu-toggle",
            bodyToggleClass: "as-body-visible",
            subMenuClass: "as-submenu",
            subMenuParent: "as-item-has-children",
            subMenuParentToggle: "as-active",
            meanExpandClass: "as-mean-expand",
            appendElement: '<span class="as-mean-expand"></span>',
            subMenuToggleClass: "as-open",
            toggleSpeed: 400
        }, e);
        return this.each((function () {
            var e = t(this);

            function s() {
                e.toggleClass(a.bodyToggleClass);
                var s = "." + a.subMenuClass;
                t(s).each((function () {
                    t(this).hasClass(a.subMenuToggleClass) && (t(this).removeClass(a.subMenuToggleClass), t(this).css("display", "none"), t(this).parent().removeClass(a.subMenuParentToggle))
                }))
            }
            e.find("li").each((function () {
                var e = t(this).find("ul");
                e.addClass(a.subMenuClass), e.css("display", "none"), e.parent().addClass(a.subMenuParent), e.prev("a").append(a.appendElement), e.next("a").append(a.appendElement)
            }));
            var n = "." + a.meanExpandClass;
            t(n).each((function () {
                t(this).on("click", (function (e) {
                    var s;
                    e.preventDefault(), s = t(this).parent(), t(s).next("ul").length > 0 ? (t(s).parent().toggleClass(a.subMenuParentToggle), t(s).next("ul").slideToggle(a.toggleSpeed), t(s).next("ul").toggleClass(a.subMenuToggleClass)) : t(s).prev("ul").length > 0 && (t(s).parent().toggleClass(a.subMenuParentToggle), t(s).prev("ul").slideToggle(a.toggleSpeed), t(s).prev("ul").toggleClass(a.subMenuToggleClass))
                }))
            })), t(a.menuToggleBtn).each((function () {
                t(this).on("click", (function () {
                    s()
                }))
            })), e.on("click", (function (t) {
                t.stopPropagation(), s()
            })), e.find("div").on("click", (function (t) {
                t.stopPropagation()
            }))
        }))
    }, t(".as-menu-wrapper").asmobilemenu();
    var e = "";
    t(window).on("scroll", (function () {
        var a, s, n, i, o;
        a = t(".sticky-active"), s = "active", n = "will-sticky", i = t(window).scrollTop(), o = a.css("height"), a.parent().css("min-height", o), t(window).scrollTop() > 800 ? (a.parent().addClass(n), i > e ? a.removeClass(s) : a.addClass(s)) : (a.parent().css("min-height", "").removeClass(n), a.removeClass(s)), e = i, t(this).scrollTop() > 500 ? t(".scrollToTop").addClass("show") : t(".scrollToTop").removeClass("show")
    })), t(".scrollToTop").each((function () {
        t(this).on("click", (function (a) {
            return a.preventDefault(), t("html, body").animate({
                scrollTop: 0
            }, e / 3), !1
        }))
    })), t("[data-bg-src]").length > 0 && t("[data-bg-src]").each((function () {
        var e = t(this).attr("data-bg-src");
        t(this).css("background-image", "url(" + e + ")"), t(this).removeAttr("data-bg-src").addClass("background-image")
    })), t("[data-bg-color]").length > 0 && t("[data-bg-color]").each((function () {
        var e = t(this).attr("data-bg-color");
        t(this).css("background-color", e), t(this).removeAttr("data-bg-color")
    })), t("[data-mask-src]").length > 0 && t("[data-mask-src]").each((function () {
        var e = t(this).attr("data-mask-src");
        t(this).css({
            "mask-image": "url(" + e + ")",
            "-webkit-mask-image": "url(" + e + ")"
        }), t(this).removeAttr("data-mask-src")
    })), t(".as-carousel").each((function () {
        var e = t(this);

        function a(t) {
            return e.data(t)
        }
        var s = '<button type="button" class="slick-prev"><i class="' + a("prev-arrow") + '"></i></button>',
            n = '<button type="button" class="slick-next"><i class="' + a("next-arrow") + '"></i></button>';
        t("[data-slick-next]").each((function () {
            t(this).on("click", (function (e) {
                e.preventDefault(), t(t(this).data("slick-next")).slick("slickNext")
            }))
        })), t("[data-slick-prev]").each((function () {
            t(this).on("click", (function (e) {
                e.preventDefault(), t(t(this).data("slick-prev")).slick("slickPrev")
            }))
        })), 1 == a("arrows") && (e.closest(".arrow-wrap").length || e.closest(".container").parent().addClass("arrow-wrap")), e.slick({
            dots: !!a("dots"),
            fade: !!a("fade"),
            arrows: !!a("arrows"),
            speed: a("speed") ? a("speed") : 1e3,
            asNavFor: !!a("asnavfor") && a("asnavfor"),
            autoplay: 0 != a("autoplay"),
            infinite: 0 != a("infinite"),
            slidesToShow: a("slide-show") ? a("slide-show") : 1,
            adaptiveHeight: !!a("adaptive-height"),
            centerMode: !!a("center-mode"),
            autoplaySpeed: a("autoplay-speed") ? a("autoplay-speed") : 8e3,
            centerPadding: a("center-padding") ? a("center-padding") : "0",
            focusOnSelect: 0 != a("focuson-select"),
            pauseOnFocus: !!a("pauseon-focus"),
            pauseOnHover: !!a("pauseon-hover"),
            variableWidth: !!a("variable-width"),
            vertical: !!a("vertical"),
            verticalSwiping: !!a("vertical"),
            prevArrow: a("prev-arrow") ? s : '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
            nextArrow: a("next-arrow") ? n : '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
            rtl: "rtl" == t("html").attr("dir"),
            responsive: [{
                breakpoint: 1600,
                settings: {
                    arrows: !!a("xl-arrows"),
                    dots: !!a("xl-dots"),
                    slidesToShow: a("xl-slide-show") ? a("xl-slide-show") : a("slide-show"),
                    centerMode: !!a("xl-center-mode"),
                    centerPadding: "0"
                }
            }, {
                breakpoint: 1400,
                settings: {
                    arrows: !!a("ml-arrows"),
                    dots: !!a("ml-dots"),
                    slidesToShow: a("ml-slide-show") ? a("ml-slide-show") : a("slide-show"),
                    centerMode: !!a("ml-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 1200,
                settings: {
                    arrows: !!a("lg-arrows"),
                    dots: !!a("lg-dots"),
                    slidesToShow: a("lg-slide-show") ? a("lg-slide-show") : a("slide-show"),
                    centerMode: !!a("lg-center-mode") && a("lg-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 992,
                settings: {
                    arrows: !!a("md-arrows"),
                    dots: !!a("md-dots"),
                    slidesToShow: a("md-slide-show") ? a("md-slide-show") : 1,
                    centerMode: !!a("md-center-mode") && a("md-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: !!a("sm-arrows"),
                    dots: !!a("sm-dots"),
                    slidesToShow: a("sm-slide-show") ? a("sm-slide-show") : 1,
                    centerMode: !!a("sm-center-mode") && a("sm-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: !!a("xs-arrows"),
                    dots: !!a("xs-dots"),
                    slidesToShow: a("xs-slide-show") ? a("xs-slide-show") : 1,
                    centerMode: !!a("xs-center-mode") && a("xs-center-mode"),
                    centerPadding: 0
                }
            }]
        })
    })), t("[data-ani-duration]").each((function () {
        var e = t(this).data("ani-duration");
        t(this).css("animation-duration", e)
    })), t("[data-ani-delay]").each((function () {
        var e = t(this).data("ani-delay");
        t(this).css("animation-delay", e)
    })), t("[data-ani]").each((function () {
        var e = t(this).data("ani");
        t(this).addClass(e), t(".slick-current [data-ani]").addClass("as-animated")
    })), t(".as-carousel").on("afterChange", (function (e, a, s, n) {
        t(a.$slides).find("[data-ani]").removeClass("as-animated"), t(a.$slides[s]).find("[data-ani]").addClass("as-animated")
    }));
    var a, s, n, i = ".ajax-contact",
        o = '[name="email"]',
        r = t(".form-messages");

    function l() {
        var e = t(i).serialize();
        (function () {
            var e, a = !0;

            function s(s) {
                s = s.split(",");
                for (var n = 0; n < s.length; n++) e = i + " " + s[n], t(e).val() ? (t(e).removeClass("is-invalid"), a = !0) : (t(e).addClass("is-invalid"), a = !1)
            }
            s('[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'), t(o).val() && t(o).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (t(o).removeClass("is-invalid"), a = !0) : (t(o).addClass("is-invalid"), a = !1);
            return a
        })() && jQuery.ajax({
            url: t(i).attr("action"),
            data: e,
            type: "POST"
        }).done((function (e) {
            r.removeClass("error"), r.addClass("success"), r.text(e), t(i + ' input:not([type="submit"]),' + i + " textarea").val("")
        })).fail((function (t) {
            r.removeClass("success"), r.addClass("error"), "" !== t.responseText ? r.html(t.responseText) : r.html("Oops! An error occured and your message could not be sent.")
        }))
    }

    function c(t) {
        return parseInt(t, 10)
    }
    t(i).on("submit", (function (t) {
        t.preventDefault(), l()
    })), a = ".popup-search-box", s = ".searchClose", n = "show", t(".searchBoxToggler").on("click", (function (e) {
        e.preventDefault(), t(a).addClass(n)
    })), t(a).on("click", (function (e) {
        e.stopPropagation(), t(a).removeClass(n)
    })), t(a).find("form").on("click", (function (e) {
        e.stopPropagation(), t(a).addClass(n)
    })), t(s).on("click", (function (e) {
        e.preventDefault(), e.stopPropagation(), t(a).removeClass(n)
    })),
        function (e, a, s, n) {
            t(a).on("click", (function (a) {
                a.preventDefault(), t(e).addClass(n)
            })), t(e).on("click", (function (a) {
                a.stopPropagation(), t(e).removeClass(n)
            })), t(e + " > div").on("click", (function (a) {
                a.stopPropagation(), t(e).addClass(n)
            })), t(s).on("click", (function (a) {
                a.preventDefault(), a.stopPropagation(), t(e).removeClass(n)
            }))
        }(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show"), t(".popup-image").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0
            }
        }), t(".popup-video").magnificPopup({
            type: "iframe"
        }), t(".popup-content").magnificPopup({
            type: "inline",
            midClick: !0
        }), t.fn.sectionPosition = function (e, a) {
            t(this).each((function () {
                var s, n, i, o, r, l = t(this);
                s = Math.floor(l.height() / 2), n = l.attr(e), i = l.attr(a), o = c(t(i).css("padding-top")), r = c(t(i).css("padding-bottom")), "top-half" === n ? (t(i).css("padding-bottom", r + s + "px"), l.css("margin-top", "-" + s + "px")) : "bottom-half" === n && (t(i).css("padding-top", o + s + "px"), l.css("margin-bottom", "-" + s + "px"))
            }))
        };
    t("[data-sec-pos]").length && t("[data-sec-pos]").imagesLoaded((function () {
        t("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for")
    })), t.fn.sectionSpace = function (e, a) {
        t(this).each((function () {
            var s, n, i, o, r, l, d = t(this);
            s = d.attr(e), n = d.attr(a), i = d.data("margin-top"), o = d.data("margin-bottom"), r = c(t(n).css("padding-top")), l = c(t(n).css("padding-bottom")), "margin-top" === s ? (t(n).css("padding-bottom", l + c(i) + "px"), d.css("margin-top", "-" + c(i) + "px").css({
                position: "relative",
                "z-index": "3"
            })) : "margin-bottom" === s && (t(n).css("padding-top", r + c(o) + "px"), d.css("margin-bottom", "-" + c(o) + "px").css({
                position: "relative",
                "z-index": "3"
            }))
        }))
    };

    function d() {
        t("feature-circle .progressbar").each((function () {
            var e = t(this).offset().top,
                a = t(window).scrollTop(),
                s = t(this).find(".circle").attr("data-percent"),
                n = (parseInt(s, 10), parseInt(100, 10), t(this).data("animate"));
            e < a + t(window).height() - 30 && !n && (t(this).data("animate", !0), t(this).find(".circle").circleProgress({
                startAngle: -Math.PI / 2,
                value: s / 100,
                size: 150,
                thickness: 6,
                emptyFill: "#E0E0E0",
                fill: {
                    color: "#661FFE"
                }
            }).on("circle-animation-progress", (function (e, a, s) {
                t(this).find(".circle-num").text((100 * s).toFixed(0) + "%")
            })).stop())
        })), t(".skill-circle .progressbar").each((function () {
            var e = t(this).offset().top,
                a = t(window).scrollTop(),
                s = t(this).find(".circle").attr("data-percent"),
                n = (parseInt(s, 10), parseInt(100, 10), t(this).data("animate"));
            e < a + t(window).height() - 30 && !n && (t(this).data("animate", !0), t(this).find(".circle").circleProgress({
                startAngle: -Math.PI / 2,
                value: s / 100,
                size: 100,
                thickness: 8,
                emptyFill: "#E0E0E0",
                lineCap: "round",
                fill: {
                    gradient: ["#F11F22", "#F2891D"]
                }
            }).on("circle-animation-progress", (function (e, a, s) {
                t(this).find(".circle-num").text((100 * s).toFixed(0) + "%")
            })).stop())
        }))
    }
    t("[data-sec-space]").length && t("[data-sec-space]").imagesLoaded((function () {
        t("[data-sec-space]").sectionSpace("data-sec-space", "data-pos-space")
    })), t(".filter-active").imagesLoaded((function () {
        if (t(".filter-active").length > 0) {
            var e = t(".filter-active").isotope({
                itemSelector: ".filter-item",
                filter: "*"
            });
            t(".filter-menu-active").on("click", "button", (function () {
                var a = t(this).attr("data-filter");
                e.isotope({
                    filter: a
                })
            })), t(".filter-menu-active").on("click", "button", (function (e) {
                e.preventDefault(), t(this).addClass("active"), t(this).siblings(".active").removeClass("active")
            }))
        }
    })), t(".masonary-active").imagesLoaded((function () {
        if (t(".masonary-active").length > 0) {
            var e = t(".masonary-active").isotope({
                itemSelector: ".filter-item",
                filter: "*",
                masonry: {
                    columnWidth: 1
                }
            });
            t(".filter-menu-active").on("click", "button", (function () {
                var a = t(this).attr("data-filter");
                e.isotope({
                    filter: a
                })
            })), t(".filter-menu-active").on("click", "button", (function (e) {
                e.preventDefault(), t(this).addClass("active"), t(this).siblings(".active").removeClass("active")
            }))
        }
    })), t(".filter-active-cat1").imagesLoaded((function () {
        if (t(".filter-active-cat1").length > 0) {
            var e = t(".filter-active-cat1").isotope({
                itemSelector: ".filter-item",
                filter: ".cat1",
                masonry: {
                    columnWidth: 1
                }
            });
            t(".filter-menu-active").on("click", "button", (function () {
                var a = t(this).attr("data-filter");
                e.isotope({
                    filter: a
                })
            })), t(".filter-menu-active").on("click", "button", (function (e) {
                e.preventDefault(), t(this).addClass("active"), t(this).siblings(".active").removeClass("active")
            }))
        }
    })), t(".counter-number").counterUp({
        delay: 10,
        time: 1e3
    }), t.fn.indicator = function () {
        var e = t(this),
            a = e.find("a"),
            s = e.find("button");
        e.append('<span class="indicator"></span>');
        var n = e.find(".indicator");
        if (a.length) var i = a;
        else if (s.length) i = s;

        function o() {
            var t = e.find(".active"),
                a = t.css("height"),
                s = t.css("width"),
                i = t.position().top + "px",
                o = t.position().left + "px";
            n.css({
                top: i,
                left: o,
                width: s,
                height: a
            })
        }
        i.on("click", (function (e) {
            e.preventDefault(), t(this).addClass("active"), t(this).siblings(".active").removeClass("active"), o()
        })), o()
    }, t(".tab-menu").length && t(".tab-menu").indicator(), t(".tab-menu3").length && t(".tab-menu3").indicator(), t.fn.asTab = function (e) {
        var a = t.extend({
            sliderTab: !1,
            tabButton: "button"
        }, e);
        t(this).each((function () {
            var e = t(this),
                s = e.find(a.tabButton);
            e.append('<span class="indicator"></span>');
            var n = e.find(".indicator");
            if (s.on("click", (function (e) {
                e.preventDefault();
                var s = t(this);
                s.addClass("active").siblings().removeClass("active"), a.sliderTab ? t(i).slick("slickGoTo", s.data("slide-go-to")) : r()
            })), a.sliderTab) {
                var i = e.data("asnavfor"),
                    o = 0;
                s.each((function () {
                    var s = t(this);
                    s.attr("data-slide-go-to", o), o++, s.hasClass("active") && t(i).slick("slickGoTo", s.data("slide-go-to")), t(i).on("beforeChange", (function (t, s, n, i) {
                        e.find(a.tabButton + '[data-slide-go-to="' + i + '"]').addClass("active").siblings().removeClass("active"), r()
                    }))
                }))
            }

            function r() {
                var i = e.find(a.tabButton + ".active"),
                    o = i.css("height"),
                    r = i.css("width"),
                    l = i.position().top + "px",
                    c = i.position().left + "px";
                n.get(0).style.setProperty("--height-set", o), n.get(0).style.setProperty("--width-set", r), n.get(0).style.setProperty("--pos-y", l), n.get(0).style.setProperty("--pos-x", c), t(s).first().position().left == i.position().left ? n.addClass("start").removeClass("center").removeClass("end") : t(s).last().position().left == i.position().left ? n.addClass("end").removeClass("center").removeClass("start") : n.addClass("center").removeClass("start").removeClass("end")
            }
            r()
        }))
    }, t(".tab-menu2").length && t(".tab-menu2").asTab({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), t(".testi-box-tab").length && t(".testi-box-tab").asTab({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), t(".service-box-tab").length && t(".service-box-tab").asTab({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), t(".testi-grid-thumb").length && t(".testi-grid-thumb").asTab({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), t(".hero-tab").length && t(".hero-tab").asTab({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), t.fn.shapeMockup = function () {
        t(this).each((function () {
            var e = t(this),
                a = e.data("top"),
                s = e.data("right"),
                n = e.data("bottom"),
                i = e.data("left");
            e.css({
                top: a,
                right: s,
                bottom: n,
                left: i
            }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")
        }))
    }, t(".shape-mockup") && t(".shape-mockup").shapeMockup(), t.fn.countdown = function () {
        t(this).each((function () {
            var e = t(this),
                a = new Date(e.data("offer-date")).getTime();

            function s(t) {
                return e.find(t)
            }
            var n = setInterval((function () {
                var t = (new Date).getTime(),
                    i = a - t,
                    o = Math.floor(i / 864e5),
                    r = Math.floor(i % 864e5 / 36e5),
                    l = Math.floor(i % 36e5 / 6e4),
                    c = Math.floor(i % 6e4 / 1e3);
                o < 10 && (o = "0" + o), r < 10 && (r = "0" + r), l < 10 && (l = "0" + l), c < 10 && (c = "0" + c), i < 0 ? (clearInterval(n), e.addClass("expired"), e.find(".message").css("display", "block")) : (s(".day").html(o), s(".hour").html(r), s(".minute").html(l), s(".seconds").html(c))
            }), 1e3)
        }))
    }, t(".counter-list").length && t(".counter-list").countdown(), t(".progress-bar").waypoint((function () {
        t(".progress-bar").css({
            animation: "animate-positive 1.8s",
            opacity: "1"
        })
    }), {
        offset: "75%"
    }), d(), t(window).scroll(d), window.addEventListener("contextmenu", (function (t) {
        t.preventDefault()
    }), !1), document.onkeydown = function (t) {
        return 123 != event.keyCode && ((!t.ctrlKey || !t.shiftKey || t.keyCode != "I".charCodeAt(0)) && ((!t.ctrlKey || !t.shiftKey || t.keyCode != "C".charCodeAt(0)) && ((!t.ctrlKey || !t.shiftKey || t.keyCode != "J".charCodeAt(0)) && ((!t.ctrlKey || t.keyCode != "U".charCodeAt(0)) && void 0))))
    }
}(jQuery);