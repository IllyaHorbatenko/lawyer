$(function() {

    //SVG Fallback
    // if(!Modernizr.svg) {
    //  $("img[src*='svg']").attr("src", function() {
    //      return $(this).attr("src").replace(".svg", ".png");
    //  });
    // };
});

function activeMenuElem(elem) {
    elem.click(function() {
        elem.each(function() {
            if ($(this) != elem) {
                elem.removeClass("active");
            }
        });
        $(this).toggleClass("active");
    });
}

function buttonMobileMenu() {
    var button = $('.button-mobile-menu'),
        content = $('.main'),
        selectElem = $(".mobile_navigation a");

    button.click(function() {
        $(".mobile-menu").toggleClass("active");
        $(".mobile-menu .overlay").toggleClass("active");
        $('body').toggleClass('overflow');
        button.toggleClass("active");
    });

    activeMenuElem(selectElem);

}

function langList() {
    $('.lang').click(function() {
        $(this).find(".dinamic-list").toggle("drop", { direction: "up" }, 200);
    })
}
$(window).resize(function() {
    border1();
    border2();
});


var limit = 0,
    thisSection = 0,
    naxtSection = 0;


// определение активной секции и добавление соотвецтвующей анимации
function setAnimation(down, up) {
    var section = document.querySelectorAll('section');


    // проебежим по всем секциям


    for (var i = 0; i < section.length; i++) {
        var sectionClass = section[i].getAttribute('class').split(' '),
            attribute = section[i].getAttribute('data-anchor');


        // пробежим по всем классам активной секции 
        for (var j = 0; j < sectionClass.length; j++) {

            // если секция активна то...
            if (sectionClass[j] == 'active') {

                for (var q = 0; q < sectionClass.length; q++) {
                    // проверяем на наличия класса animation
                    if (sectionClass[q] == 'animation') {
                        limit++;
                        thisSection = parseInt(attribute);
                    }
                    if (sectionClass[q] !== 'animation') {
                        section[i].classList.add('animation');
                        limit = 0;
                        nextSection = parseInt(attribute);
                    }
                }
                if (limit == 0) {
                    if (thisSection < nextSection) {
                        // вызов анимации по скроллу вниз
                        down[i].duration(2);
                        down[i].play(0);
                        for (var k = 0; k < section.length; k++) {
                            // удаление всех классов animation, кроме активной секции 
                            if (k != i) {
                                section[k].classList.remove('animation');
                                down[k].pause(0);
                            }
                        }
                    }
                    if (thisSection > nextSection) {
                        // вызов анимации по скроллу вверх
                        up[i].play(0);
                        for (var k = 0; k < section.length; k++) {
                            if (k != i) {
                                section[k].classList.remove('animation');
                                up[k].pause(0);
                            }
                        }
                    }
                }
            }
        }
    }
}

//изменяется - для плавной обратной анимации animate.css*/

/**
 * FastClick
 */

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}


function border1() {
    $('.title-1').each(function() {

        var container = $(this).find('.border'),
            aside = $(this).find('.aside'),
            mainWidht = container.outerWidth(),
            asideWidht = aside.outerWidth(),
            mainHeight = container.height(),
            link1 = container.find('.line-1'),
            link2 = container.find('.line-2'),
            link3 = container.find('.line-3'),
            link4 = container.find('.line-4'),
            link5 = container.find('.line-5');



        link1.css({ 'height': mainHeight - (mainHeight / 5), "width": mainWidht / 2 });
        link2.css({ 'height': mainHeight, "width": mainWidht / 2 });
        link3.css({ 'height': mainHeight / 10.2 });
        link4.css({ "width": (mainWidht - asideWidht) / 2 });
        link5.css({ "width": (mainWidht - asideWidht) / 2 });
    });

}


function border2() {

    $('.title-2').each(function() {

        var container = $(this).find('.border'),
            mainWidht = container.outerWidth(),
            mainHeight = container.height(),
            width = $(this).find('.title').width(),
            link1 = container.find('.line-1'),
            link2 = container.find('.line-2'),
            link3 = container.find('.line-3'),
            link4 = container.find('.line-4'),
            link5 = container.find('.line-5');

        link1.css({ 'height': mainHeight - (mainHeight / 5), "width": mainWidht / 2 });
        link2.css({ 'height': mainHeight, "width": mainWidht / 2 });
        link3.css({ 'height': mainHeight / 10.2 });
        link4.css({ "width": (mainWidht - width - 20) / 2 });
        link5.css({ "width": (mainWidht - width - 20) / 2 });
    });

}

function aboutPhoto() {
    $('.about-person').click(function() {
        $(this).find('.arrow').toggleClass('active');
        $(this).toggleClass('active');
    });
}

function topPanel() {


    $('.section').each(function() {
        if ($(this).hasClass('active')) {
            var dataAttr = $(this).data('anchor');
            if (dataAttr != 1) {
                $(".top-panel").hide("fade", 200);
            } else {

                $(".top-panel").show("fade", 200);
            }
        }
    });
}
$(document).ready(function() {

    border1();
    border2();
    langList();
    aboutPhoto();
    buttonMobileMenu();


    var md = new MobileDetect(window.navigator.userAgent);

    var mdSafari = new MobileDetect(
        'Mozilla/5.0 (Linux; U; Android 4.0.3; en-in; SonyEricssonMT11i' +
        ' Build/4.1.A.0.562) AppleWebKit/534.30 (KHTML, like Gecko)' +
        ' Version/4.0 Mobile Safari/534.30');



    if (md.mobile() != "iPad") {
        $('.main').fullpage({
            anchors: ['1', '2', '3', '4', '5', '6', '7', '8'],
            menu: '#desktop-menu',
            css3: true,
            navigation: true,
            responsiveWidth: 1200
        });


    }
    if (document.documentElement.clientWidth > 1200 && md.mobile() != "iPad") {


        var td1 = new TimelineMax(),
            td2 = new TimelineMax(),
            td3 = new TimelineMax(),
            td4 = new TimelineMax(),
            td5 = new TimelineMax(),
            td6 = new TimelineMax(),
            td7 = new TimelineMax(),
            td8 = new TimelineMax(),

            tu1 = new TimelineMax(),
            tu2 = new TimelineMax(),
            tu3 = new TimelineMax(),
            tu4 = new TimelineMax(),
            tu5 = new TimelineMax(),
            tu6 = new TimelineMax(),
            tu7 = new TimelineMax(),
            tu8 = new TimelineMax(),

            td = [td1, td2, td3, td4, td5, td6, td7, td8],
        tu = [tu1, tu2, tu3, tu4, tu5, tu6, td7, tu8];

        td1.pause();
        td2.pause();
        td3.pause();
        td4.pause();
        td5.pause();
        td6.pause();
        td7.pause();
        td8.pause();

        tu1.pause();
        tu2.pause();
        tu3.pause();
        tu4.pause();
        tu5.pause();
        tu6.pause();
        tu7.pause();
        tu8.pause();

        // GREEN SOCKS FOR DOWN


        // секция 1
        var rule1 = CSSRulePlugin.getRule(".header .slider .owl-controls:after");
        var rule2 = CSSRulePlugin.getRule(".header .slider .owl-controls:before");
        td1.from('#hd-ln-1', 0.7, { x: -100, opacity: 0, ease: Power4.easeOut }, 'hd-ln', '-=0.5');
        td1.from('#hd-ln-2', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'hd-ln');
        td1.from('#hd-ln-3', 0.7, { x: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'hd-ln');
        td1.from('#hd-ln-4', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'hd-ln');
        td1.from('#hd-ln-5', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'hd-ln');
        td1.from('#hd-tlt', 0.7, { y: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'hd-ln');
        td1.from('#hd-as', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'hd-ln');
        td1.from('.top-panel', 0.7, { y: -50, opacity: 0, ease: Power4.easeOut }, 'hd-ln');

        tu1.set('#hd-ln-1', { x: -100, opacity: 0, ease: Power4.easeOut }, '+=0.5', 'hd-ln')
            .to('#hd-ln-1', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, 'hd-ln');
        tu1.set('#hd-ln-2', { x: 100, opacity: 0, ease: Power4.easeOut }, 'hd-ln')
            .to('#hd-ln-2', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, 'hd-ln');
        tu1.set('#hd-ln-3', { x: -100, opacity: 0, ease: Power4.easeOut }, 'hd-ln')
            .to('#hd-ln-3', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, 'hd-ln');
        tu1.set('#hd-ln-4', { y: 100, opacity: 0, ease: Power4.easeOut }, 'hd-ln')
            .to('#hd-ln-4', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'hd-ln');
        tu1.set('#hd-ln-5', { y: 100, opacity: 0, ease: Power4.easeOut }, 'hd-ln')
            .to('#hd-ln-5', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'hd-ln');
        tu1.set('#hd-tlt', { y: -100, opacity: 0, ease: Power4.easeOut }, 'hd-ln')
            .to('#hd-tlt', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'hd-ln');
        tu1.set('#hd-as', { y: 100, opacity: 0, ease: Power4.easeOut }, 'hd-ln')
            .to('#hd-as', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'hd-ln');
        tu1.set('.top-panel', { y: -50, opacity: 0, ease: Power4.easeOut }, 'hd-ln')
            .to('.top-panel', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'hd-ln');


        td2.from('#sec1-ln-1', 0.7, { x: -100, opacity: 0, ease: Power4.easeOut }, 'sec1-ln', '-=0.5');
        td2.from('#sec1-ln-2', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec1-ln');
        td2.from('#sec1-ln-3', 0.7, { x: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec1-ln');
        td2.from('#sec1-ln-4', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec1-ln');
        td2.from('#sec1-ln-5', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec1-ln');
        td2.from('#sec1-tlt', 0.7, { y: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec1-ln');
        td2.from('#sec1-con', 0.7, { x: -100, opacity: 0, ease: Power4.easeOut }, '-=0.7');

        tu2.set('#sec1-ln-1', { x: -100, opacity: 0, ease: Power4.easeOut }, '+=0.5', 'sec1-ln')
            .to('#sec1-ln-1', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, 'sec1-ln');
        tu2.set('#sec1-ln-2', { x: 100, opacity: 0, ease: Power4.easeOut }, 'sec1-ln')
            .to('#sec1-ln-2', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, 'sec1-ln');
        tu2.set('#sec1-ln-3', { x: -100, opacity: 0, ease: Power4.easeOut }, 'sec1-ln')
            .to('#sec1-ln-3', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, 'sec1-ln');
        tu2.set('#sec1-ln-4', { y: 100, opacity: 0, ease: Power4.easeOut }, 'sec1-ln')
            .to('#sec1-ln-4', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'sec1-ln');
        tu2.set('#sec1-ln-5', { y: 100, opacity: 0, ease: Power4.easeOut }, 'sec1-ln')
            .to('#sec1-ln-5', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'sec1-ln');
        tu2.set('#sec1-tlt', { y: -100, opacity: 0, ease: Power4.easeOut }, 'sec1-ln')
            .to('#sec1-tlt', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'sec1-ln');
        tu2.set('#sec1-con', { x: -100, opacity: 0, ease: Power4.easeOut }, 'sec1-ln')
            .to('#sec1-con', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, 'sec1-ln');


        td3.staggerFrom('#sec2-con1', 0.7, { y: -200, opacity: 0, ease: Power4.easeOut }, 0.1, 'sec2-con');
        td3.staggerFrom('#sec2-con2', 0.7, { y: -200, opacity: 0, ease: Power4.easeOut }, 0.1, 'sec2-con');
        td3.staggerFrom('#sec2-con3', 0.7, { y: -200, opacity: 0, ease: Power4.easeOut }, 0.1, 'sec2-con');

        tu3.set('#sec2-con1', { y: -200, opacity: 0, ease: Power4.easeOut }, 0.1, 'sec2-con-up', '+=0.5')
            .to('#sec2-con1', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 0.1, 'sec2-con-up', '+=0.5');
        tu3.set('#sec2-con2', { y: -200, opacity: 0, ease: Power4.easeOut }, 0.1, 'sec2-con-up', '+=0.5')
            .to('#sec2-con2', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 0.1, 'sec2-con-up', '+=0.5');
        tu3.set('#sec2-con3', { y: -200, opacity: 0, ease: Power4.easeOut }, 0.1, 'sec2-con-up', '+=0.5')
            .to('#sec2-con3', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 0.1, 'sec2-con-up', '+=0.5');


        td4.from('#sec3-ln-1', 0.7, { x: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5');
        td4.from('#sec3-ln-2', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5');
        td4.from('#sec3-ln-3', 0.7, { x: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5');
        td4.from('#sec3-ln-4', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5');
        td4.from('#sec3-ln-5', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5');
        td4.from('#sec3-tlt', 0.7, { y: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5');
        td4.from('#sec3-as', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5');
        td4.from('#sec3-con-1', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.7');
        td4.from('#sec3-con-2', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.7');

        tu4.set('#sec3-ln-1', { x: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5')
            .to('#sec3-ln-1', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, '-=0.5');
        tu4.set('#sec3-ln-2', { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5')
            .to('#sec3-ln-2', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, '-=0.5');
        tu4.set('#sec3-ln-3', { x: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5')
            .to('#sec3-ln-3', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, '-=0.5');
        tu4.set('#sec3-ln-4', { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5')
            .to('#sec3-ln-4', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.5');
        tu4.set('#sec3-ln-5', { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5')
            .to('#sec3-ln-5', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.5');
        tu4.set('#sec3-tlt', { y: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5')
            .to('#sec3-tlt', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.5');
        tu4.set('#sec3-as', { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5')
            .to('#sec3-as', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.5');
        tu4.set('#sec3-con-1', { x: -100, opacity: 0, ease: Power4.easeOut }, '-=0.7')
            .to('#sec3-con-1', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, '-=0.7');
        tu4.set('#sec3-con-2', { x: -100, opacity: 0, ease: Power4.easeOut }, '-=0.7')
            .to('#sec3-con-2', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, '-=0.7');


        td5.from('#sec4-ln-1', 0.7, { x: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5');
        td5.from('#sec4-ln-2', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5');
        td5.from('#sec4-ln-3', 0.7, { x: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5');
        td5.from('#sec4-ln-4', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5');
        td5.from('#sec4-ln-5', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5');
        td5.from('#sec4-tlt', 0.7, { y: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5');
        td5.from('#sec4-as', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5');
        td5.from('#sec4-con-1', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.7');
        td5.from('#sec4-con-2', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.7');

        tu5.set('#sec4-ln-1', { x: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5')
            .to('#sec4-ln-1', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, '-=0.5');
        tu5.set('#sec4-ln-2', { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5')
            .to('#sec4-ln-2', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, '-=0.5');
        tu5.set('#sec4-ln-3', { x: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5')
            .to('#sec4-ln-3', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, '-=0.5');
        tu5.set('#sec4-ln-4', { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5')
            .to('#sec4-ln-4', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.5');
        tu5.set('#sec4-ln-5', { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5')
            .to('#sec4-ln-5', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.5');
        tu5.set('#sec4-tlt', { y: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5')
            .to('#sec4-tlt', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.5');
        tu5.set('#sec4-as', { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5')
            .to('#sec4-as', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, '-=0.5');
        tu5.set('#sec4-con-1', { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.7')
            .to('#sec4-con-1', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, '-=0.7');
        tu5.set('#sec4-con-2', { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.7')
            .to('#sec4-con-2', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, '-=0.7');


        td6.from('#sec5-ln-1', 0.7, { x: -100, opacity: 0, ease: Power4.easeOut }, 'sec5-ln', '-=0.5');
        td6.from('#sec5-ln-2', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec5-ln');
        td6.from('#sec5-ln-3', 0.7, { x: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec5-ln');
        td6.from('#sec5-ln-4', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec5-ln');
        td6.from('#sec5-ln-5', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec5-ln');
        td6.from('#sec5-tlt', 0.7, { y: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec5-ln');

        tu6.set('#sec5-ln-1', { x: -100, opacity: 0, ease: Power4.easeOut }, '+=0.5', 'sec5-ln')
            .to('#sec5-ln-1', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, 'sec5-ln');
        tu6.set('#sec5-ln-2', { x: 100, opacity: 0, ease: Power4.easeOut }, 'sec5-ln')
            .to('#sec5-ln-2', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, 'sec5-ln');
        tu6.set('#sec5-ln-3', { x: -100, opacity: 0, ease: Power4.easeOut }, 'sec5-ln')
            .to('#sec5-ln-3', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, 'sec5-ln');
        tu6.set('#sec5-ln-4', { y: 100, opacity: 0, ease: Power4.easeOut }, 'sec5-ln')
            .to('#sec5-ln-4', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'sec5-ln');
        tu6.set('#sec5-ln-5', { y: 100, opacity: 0, ease: Power4.easeOut }, 'sec5-ln')
            .to('#sec5-ln-5', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'sec5-ln');
        tu6.set('#sec5-tlt', { y: -100, opacity: 0, ease: Power4.easeOut }, 'sec5-ln')
            .to('#sec5-tlt', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'sec5-ln');



        td7.from('#sec6-ln-1', 0.7, { x: -100, opacity: 0, ease: Power4.easeOut }, 'sec6-ln', '-=0.5');
        td7.from('#sec6-ln-2', 0.7, { x: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec6-ln');
        td7.from('#sec6-ln-3', 0.7, { x: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec6-ln');
        td7.from('#sec6-ln-4', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec6-ln');
        td7.from('#sec6-ln-5', 0.7, { y: 100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec6-ln');
        td7.from('#sec6-tlt', 0.7, { y: -100, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec6-ln');
        td7.from('#sec6-con1', 0.7, { y: -50, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec6-ln');
        td7.from('#sec6-con2', 0.7, { y: -50, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec6-ln');
        td7.from('#sec6-con3', 0.7, { y: -50, opacity: 0, ease: Power4.easeOut }, '-=0.5', 'sec6-ln');

        tu7.set('#sec6-ln-1', { x: -100, opacity: 0, ease: Power4.easeOut })
            .to('#sec6-ln-1', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, 'sec6-ln-up');
        tu7.set('#sec6-ln-2', { x: 100, opacity: 0, ease: Power4.easeOut }, 'sec6-ln-up')
            .to('#sec6-ln-2', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, 'sec6-ln-up');
        tu7.set('#sec6-ln-3', { x: -100, opacity: 0, ease: Power4.easeOut }, 'sec6-ln-up')
            .to('#sec6-ln-3', 0.7, { x: 0, opacity: 1, ease: Power4.easeOut }, 'sec6-ln-up');
        tu7.set('#sec6-ln-4', { y: 100, opacity: 0, ease: Power4.easeOut }, 'sec6-ln-up')
            .to('#sec6-ln-4', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'sec6-ln-up');
        tu7.set('#sec6-ln-5', { y: 100, opacity: 0, ease: Power4.easeOut }, 'sec6-ln-up')
            .to('#sec6-ln-5', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'sec6-ln-up');
        tu7.set('#sec6-tlt', { y: -100, opacity: 0, ease: Power4.easeOut }, 'sec6-ln-up')
            .to('#sec6-tlt', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'sec6-ln-up');
        tu7.set('#sec6-con1', { y: 50, opacity: 0, ease: Power4.easeOut }, 'sec6-ln-up')
            .to('#sec6-con1', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'sec6-ln-up');
        tu7.set('#sec6-con2', { y: 50, opacity: 0, ease: Power4.easeOut }, 'sec6-ln-up')
            .to('#sec6-con2', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'sec6-ln-up');
        tu7.set('#sec6-con3', { y: 50, opacity: 0, ease: Power4.easeOut }, 'sec6-ln-up')
            .to('#sec6-con3', 0.7, { y: 0, opacity: 1, ease: Power4.easeOut }, 'sec6-ln-up');





        setInterval(function() {
            setAnimation(td, tu);
        }, 100);


    var arrow1 = new TimelineMax(),
        arrow2 = new TimelineMax();
    arrow1.from(rule1, 1, { cssRule: { ease: Elastic.easeOut.config(2, 0.7), x: -5 } })
        .to(rule1, 0.5, { cssRule: { x: -5 } });
    arrow2.from(rule2, 1, { cssRule: { ease: Elastic.easeOut.config(2, 0.7), x: 5 } })
        .to(rule2, 0.5, { cssRule: { x: 5 } });

    arrow1.repeat(Infinity);
    arrow2.repeat(Infinity);
    }

    // для инициализации tooltips
    // $( document ).tooltip({
    //   track: true
    // });  
    // скролл по ссылке с атрибутом href 
    // $(".header_nav a[href*='#']").on("click", function(e) {
    //     e.preventDefault();
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $(anchor.attr('href')).offset().top
    //     }, 500);
    //     return false;
    // });
    // Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
    // $(".scroll_to").on("click", function(e) {
    //     e.preventDefault();
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $("#" + anchor.data('scroll')).offset().top
    //     }, 500);
    //     return false;
    // });
    //  Активация слайдера

    if (document.documentElement.clientWidth > 460) {
        $(".owl-carousel").owlCarousel({
            loop: true,
            items: 2,
            dots: true,
            animateOut: 'fadeOut'

        });
    } else if (document.documentElement.clientWidth <= 460) {
        $(".owl-carousel").owlCarousel({
            loop: true,
            items: 1,
            dots: true,
            animateOut: 'fadeOut'

        });
    }
    setInterval(function() {

            topPanel();
        }, 100)
        // Кастомные кнопки управления слайдером
        // var owl = $('.owl-carousel');
        // owl.owlCarousel();
        // $('.customNextBtn').click(function() {
        //     owl.trigger('next.owl.carousel', [700]);
        // });
        // // Go to the previous item
        // $('.customPrevBtn').click(function() {
        //     // With optional speed parameter
        //     // Parameters has to be in square bracket '[]'
        //     owl.trigger('prev.owl.carousel', [700]);
        // });

    // Select в модальном окне
    $(document).click(function() {
        $('.slct').removeClass('active');
        $('.slct_arrow').removeClass('active');
        $('.slct').parent().find('.drop').slideUp("fast");

    });
    $('.slct').click(function() {
        /* Заносим выпадающий список в переменную */
        var dropBlock = $(this).parent().find('.drop');
        //  закрываем все открытые
        $('.slct').removeClass('active').parent().find('.drop').slideUp("fast");

        /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
        if (dropBlock.is(':hidden')) {
            dropBlock.slideDown();

            /* Выделяем ссылку открывающую select */
            $(this).addClass('active');
            $(this).siblings(".slct_arrow").addClass('active');


            /* Работаем с событием клика по элементам выпадающего списка */
            $('.drop').find('li').click(function() {

                /* Заносим в переменную HTML код элемента 
                списка по которому кликнули */
                var selectResult = $(this).html();

                /* Находим наш скрытый инпут и передаем в него 
                значение из переменной selectResult */
                $(this).parent().parent().find('input').val(selectResult);

                /* Передаем значение переменной selectResult в ссылку которая 
                открывает наш выпадающий список и удаляем активность */
                $(this).parent().parent().find(".slct").removeClass('active').html(selectResult);
                $(".slct_arrow").removeClass('active');

                /* Скрываем выпадающий блок */
                dropBlock.slideUp();
            });

            /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
        } else {
            $(this).removeClass('active');
            $(".slct_arrow").removeClass('active');
            dropBlock.slideUp();
        }

        /* Предотвращаем обычное поведение ссылки при клике */
        return false;
    });
    // Открываем модальное окно  
    $(".modal").click(function(e) {
        e.preventDefault();
        var id = $(this).data('modal');
        var txt = $(this).data('info');
        // var title =  $(this).data('title'); // для изменения title в модалке
        $(".popup[data-modal=" + id + "]").toggle("fade", 200).find("form").css('display', 'block');
        $(".popup[data-modal=" + id + "]").find(".title").css('display', 'block');
        $(".popup[data-modal=" + id + "]").find(".text").css('display', 'block');
        $(".popup[data-modal=" + id + "]").find(".close").css('display', 'block');
        $(".popup[data-modal=" + id + "] input[name=form_name").val(txt);
        // $(".popup[data-modal="+id+"] h2").html(title); // прописать в ссылку data-title="нужный title"

        if (window.matchMedia("(min-width: 992px)").matches) {
            $("body").css({ "overflow": "hidden" });
        }
        if (window.matchMedia("(max-width: 992px)").matches) {

            $("body").css({ "overflow": "hidden" });
        }
        if (document.documentElement.clientWidth > 1200 && md.mobile() != "iPad") {
            var i = document.documentElement.clientWidth;
            console.log(i)
            $('.main').fullpage({

            });


        }
    });
    // overlay для закрытия
    $(".overlay").click(function() {
        $(this).parent().toggle("drop", { direction: "up" }, 200);
        $("body").css({ "overflow": "inherit" });
    });
    // закрываем модальное окно на крестик
    $(".popup .close").click(function(e) {
        e.preventDefault();
        $(this).parents(".popup").hide("drop", { direction: "up" }, 200);
        $("body").css({ "overflow": "inherit" });
    });
    //обработчик кнопки на нажатие btn_mnu
    $("#nav-button-label").click(function(e) {
        e.preventDefault();
        $(this).toggleClass('nav-on'); // добавляет класс для анимации самой кнопки
        $(this).next().slideToggle(); // открывает меню main_nav_block, которое было скрыто
        $(this).find('.nav-line').toggleClass('active');
        $(".mnu_dropdown").toggleClass("active");
    });
    // Скрыть элемент при клике за его пределами бутерброд и его выпадающее меню
    $(document).click(function(event) {
        if ($(event.target).closest("#nav-button-label").length)
            return;
        if ($(event.target).closest("[off-canvas]").length)
            return;
        $("#nav-button-label").removeClass("nav-on");
        $("#nav-button-label .nav-line").removeClass("active");

        event.stopPropagation();

    });
    //  Отправка форм
    $("form:not('#form3')").submit(function() { // перехватываем все при событии отправки
        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = [];
        form.find('.modal_form_input').each(function() { // пробежим по каждому полю в форме

            if ($(this).val() == '') { // если находим пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
            } else if ($(this).val() !== '') { // если находим не пустое
                $(this).siblings().hide("fade", 500)
                error.push(false); // нет ошибки
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500)
            });

        });
        form.find('.modal_form_phone').each(function() { // пробежим по каждому полю в форме
            var pattern = /^(\+|d+)*\d[\d\(\)\-]{4,14}\d$/;
            if ($(this).val() == '') { // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка 
                if ($(this).siblings().hasClass('input_error_phone')) {
                    $(this).siblings().removeClass('input_error_phone').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }
            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500);
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_phone').text("").prepend("Введите правильный телефон<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500);
            });

        });
        form.find('.modal_form_email').each(function() { // пробежим по каждому полю в форме
            var pattern = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9\-]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/;
            if ($(this).val() == '') { // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
                if ($(this).siblings().hasClass('input_error_email')) {
                    $(this).siblings().removeClass('input_error_email').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }

            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500).removeClass('input_error_email');
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_email').text("").prepend("Введите правильный Email<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500);
            });

        });
        var erorr_finish = 0;
        for (var i = 0; i < error.length; i++) {
            if (error[i] == false) {
                erorr_finish = erorr_finish + 1;
            };
            // console.log(error[i]);
        }
        //console.log(erorr_finish);
        var size = error.length - 1;
        if (erorr_finish > size) { // в зависимости от полей которые проверяются (в нашем случае 3 поля)
            var data = form.serialize(); // подготавливаем данные
            $.ajax({ // инициализируем ajax запрос
                type: 'POST', // отправляем в POST формате, можно GET
                url: 'mail.php', // путь до обработчика, у нас он лежит в той же папке
                dataType: 'json', // ответ ждем в json формате
                data: data, // данные для отправки
                beforeSend: function(data) { // событие до отправки
                    form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                },
                success: function(data) { // событие после удачного обращения к серверу и получения ответа
                    if (data['error']) { // если обработчик вернул ошибку
                        alert(data['error']); // покажем её текст
                    } else { // если все прошло ок

                        if (data['form_type'] == 'modal') {
                            $('.dm-modal form').hide();
                            $('.dm-modal .title').hide();
                            $('.dm-modal .text').hide();
                            $('.dm-modal .close').hide();
                            form.trigger('reset');
                            $('.dm-modal .success_mail').addClass('active'); //пишем что всё ок
                            setTimeout(function() {
                                form.parents('.popup').hide("fade", 500);
                                $('.dm-modal .success_mail').removeClass('active');
                                //$("body").css({ "overflow": "inherit", "padding-right": "0" });
                            }, 3000);
                        }
                        if (data['form_type'] == 'normal') { //надо писать в обычных формах <input type="hidden" name="form_type" value="normal"> 
                            form.trigger('reset');
                            $('.dm-modal .success_mail').addClass('active');
                            $('.popup[data-modal=modal-res]').toggle("fade", 500);
                            //$("body").css({ "overflow": "hidden", "padding-right": "17px" });
                            setTimeout(function() {
                                $('.popup[data-modal=modal-res]').hide("fade", 500);
                                $('.dm-modal .success_mail').removeClass('active', 500);
                                //$("body").css({ "overflow": "inherit", "padding-right": "0" });
                            }, 3000);
                        }
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                    alert(xhr.status); // покажем ответ сервера
                    alert(thrownError); // и текст ошибки
                },
                complete: function(data) { // событие после любого исхода
                    form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                }

            });
        }
        return false; // вырубаем стандартную отправку формы
    });
    var files;
    $('input[type=file]').change(function() {
        files = this.files;
        //alert(files);
    });

    //  Отправка форм с файлом
    $("#form3").on('submit', function(e) { // перехватываем все при событии отправки
        e.preventDefault();
        var $data = new FormData();
        var form = $(this);
        var error = [];
        $.each(files, function(key, value) {
            if (!this.type.match(/(.png)|(.jpeg)|(.jpg)|(.gif)$/i) || (this.size / 1024).toFixed(0) > 1524) {
                alert("Неправильный формат графического файла. Или слишком большой размер. Размер не должен превышать 1 мегабайт!");
                return false;
            } else {

            }
            $data.append(key, value);
        });

        $inputs = $("#form3").find('input[type=hidden]');
        $textarea = $("#form3").find('textarea');
        $.each($inputs, function(key, value) {
            $data.append($(this).attr('name'), $(this).val());
        });

        $data.append($textarea.attr('name'), $textarea.val());

        form.find('.modal_form_input').each(function() { // пробежим по каждому полю в форме

            if ($(this).val() == '') { // если находим пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
            } else if ($(this).val() !== '') { // если находим не пустое
                $(this).siblings().hide("fade", 500)
                error.push(false); // нет ошибки
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500)
            });

        });
        form.find('.modal_form_phone').each(function() { // пробежим по каждому полю в форме
            var pattern = /^(\+|d+)*\d[\d\(\)\-]{4,14}\d$/;
            if ($(this).val() == '') { // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка 
                if ($(this).siblings().hasClass('input_error_phone')) {
                    $(this).siblings().removeClass('input_error_phone').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }
            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500);
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_phone').text("").prepend("Введите правильный телефон<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500);
            });

        });
        form.find('.modal_form_email').each(function() { // пробежим по каждому полю в форме
            var pattern = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/;
            if ($(this).val() == '') { // если пустое
                $(this).siblings().show("fade", 500);
                error.push(true); // ошибка
                if ($(this).siblings().hasClass('input_error_email')) {
                    $(this).siblings().removeClass('input_error_email').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                }

            } else if ($(this).val() !== '') {
                if ($(this).val().match(pattern)) {
                    $(this).siblings().hide("fade", 500).removeClass('input_error_email');
                    error.push(false); // нет ошибок
                } else {
                    $(this).siblings().show("fade", 500).addClass('input_error_email').text("").prepend("Введите правильный Email<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    error.push(true); // ошибка  
                }
            }
            $(this).focus(function() {
                $(this).siblings().hide("fade", 500);
            });

        });


        if (files === undefined) {
            $('.fileLoad input').val('Файл не выбран!');
            $('.file-load-block input[type=text]').css('border', '1px solid red');
            error.push(true); // ошибка  
        }

        var erorr_finish = 0;

        for (var i = 0; i < error.length; i++) {
            if (error[i] == false) {
                erorr_finish = erorr_finish + 1;
            }

            //console.log(error[i]);
        }
        //console.log(erorr_finish);
        var size = error.length - 1;
        if (erorr_finish > size) {
            $.ajax({
                url: 'mail.php',
                type: 'POST',
                contentType: false,
                processData: false,
                dataType: 'json',
                data: $data,
                beforeSend: function(loading) {
                    $('.fileLoad input').val('Файл загружается');
                },
                success: function(data) {
                    $('.dm-modal .sucess_mail').show('fade', 500);
                    $('.popup2 .close').hide();
                    $('.fileLoad input').val('Файл загружен!');
                    $('.file-load-block input[type=text]').css('color', '#b2d04e');
                    $('.popup2').show().delay(2000).fadeOut(
                        function() {
                            $('.popup2').removeClass('active');
                            form.trigger('reset');
                            $('.dm-modal .sucess_mail').addClass('active');
                            $("#win2 .close").trigger('click');
                            $('.popup2 .close').show();
                            $('.fileLoad input').val('Выберите файл');
                            files = undefined;
                            $('.file-load-block input[type=text]').css('color', '#fff)');
                            $('.file-load-block input[type=text]').css('border', '1px solid #fff');
                        }
                    );



                }
            });
        }
    });

});


$(".loader_inner").fadeOut();
$(".loader").delay(400).fadeOut("slow");
