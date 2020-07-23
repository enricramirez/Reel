"use strict";

$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

TweenMax.to("html,body", 0, {
    overflow: "auto",
    delay: 1.7
})

let tlIntro = new TimelineMax();
tlIntro.to(".load1", .8, {
        top: "50%",
        ease: Power3.easeOut
    }, .1)
    .to(".load2", .8, {
        top: "50%",
        ease: Power3.easeOut
    }, .3)
    .to(".load3", .8, {
        top: "50%",
        ease: Power3.easeOut
    }, .5)
    .to(".load5", .8, {
        top: "50%",
        ease: Power3.easeOut
    }, .7)
    .to(".load6", .8, {
        top: "50%",
        ease: Power3.easeOut
    }, .9)
    .to(".load7", .8, {
        top: "50%",
        ease: Power3.easeOut
    }, 1.1)

document.addEventListener("DOMContentLoaded", function (event) {

    let controller = new ScrollMagic.Controller();

    let tl3 = new TimelineMax();
    tl3.to(".load7", 1, {
            top: "-50%",
            ease: Power1.easeIn
        })
        .to(".load6", 1, {
            top: "-50%",
            ease: Power1.easeIn
        })
        .to(".load5", 1, {
            top: "-50%",
            ease: Power1.easeIn
        })
        .to(".load3", 1, {
            top: "-50%",
            ease: Power1.easeIn
        })
        .to(".load2", 1, {
            top: "-50%",
            ease: Power1.easeIn
        })
        .to(".load1", 1, {
            top: "-50%",
            ease: Power1.easeIn
        })
        .to("h1", 1, {
            opacity: 1
        })

    let escenaIntro = new ScrollMagic.Scene({
            triggerElement: ".home",
            duration: "900%",
            triggerHook: 0
        })
        .setTween(tl3)
        .setPin(".home")
        .addTo(controller);

    let tl1 = new TimelineMax();
    tl1.to(".transition", 0.8, {
            height: "100%",
            top: "0",
            ease: Power3.easeIn
        })
        .to(".transition", 0.8, {
            height: "0%",
            ease: Power4.easeOut,
            delay: 0.2
        })
        .to(".gifImg", 0, {
            backgroundImage: "url(img/gifReel.gif)"
        }, 0.79)
        .to(".gifImg", 0.8, {
            scale: 1
        }, 0.79)

    let escena1 = new ScrollMagic.Scene({
            triggerElement: "#gif",
            reverse: false
        })
        .setTween(tl1)
        .addTo(controller);

    let escena2 = new ScrollMagic.Scene({
            triggerElement: "#fotos",
            triggerHook: 0.5,
            reverse: false
        })
        .setTween("#img1", 2, {
            x: 0,
            ease: Power4.easeOut
        })
        .addTo(controller);

    let escena3 = new ScrollMagic.Scene({
            triggerElement: "#img2",
            triggerHook: 0.5,
            reverse: false
        })
        .setTween("#img2", 2, {
            x: 0,
            rotation: 4,
            ease: Power4.easeOut
        })
        .addTo(controller);

    let escena4 = new ScrollMagic.Scene({
            triggerElement: "#img3",
            triggerHook: 0.5,
            reverse: false
        })
        .setTween("#img3", 2, {
            x: 0,
            rotation: -4,
            ease: Power4.easeOut
        })
        .addTo(controller);

    let escena5 = new ScrollMagic.Scene({
            triggerElement: "#img4",
            triggerHook: 0.5,
            reverse: false
        })
        .setTween("#img4", 2, {
            x: 0,
            ease: Power4.easeOut
        })
        .addTo(controller);

    let escena6 = new ScrollMagic.Scene({
            triggerElement: "#img5",
            triggerHook: 0.5,
            reverse: false
        })
        .setTween("#img5", 2, {
            x: 0,
            rotation: 4,
            ease: Power4.easeOut
        })
        .addTo(controller);

    let escena7 = new ScrollMagic.Scene({
            triggerElement: "#tipo1",
            triggerHook: 0.3,
            reverse: false
        })
        .setClassToggle(".tipo1", "animacionTipo")
        .addTo(controller);

    let escena7b = new ScrollMagic.Scene({
            triggerElement: "#tipo1",
            triggerHook: 0.3,
            reverse: false
        })
        .setClassToggle(".subtipo1", "animacionTipo")
        .addTo(controller);

    let escena7c = new ScrollMagic.Scene({
            triggerElement: "#tipo2",
            triggerHook: 0.3,
            reverse: false
        })
        .setClassToggle(".tipo2", "animacionTipo")
        .addTo(controller);

    let escena7d = new ScrollMagic.Scene({
            triggerElement: "#tipo2",
            triggerHook: 0.3,
            reverse: false
        })
        .setClassToggle(".subtipo2", "animacionTipo")
        .addTo(controller);

    let tl2 = new TimelineMax();
    tl2.to(".marcaPadre1 img", 1, {
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)"
        })
        .to(".marcaPadre2 img", 1, {
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)"
        })
        .to(".marcaPadre3 img", 1, {
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)"
        })
        .to(".marcaPadre4 img", 1, {
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)"
        })
        .to(".marcaPadre5 img", 1, {
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)"
        })
        .to(".transitionBlack", 1, {
            height: "100%"
        }, 3)
        .to("circle", 1, {
            fill: "#DEC896"
        }, 3)
        .to(".transitionBlack", 0, {
            zIndex: "0"
        }, 4)
        .to(".load", 0, {
            backgroundColor: "#1A1A1A"
        }, 4)
        .to("body, html", 0, {
            backgroundColor: "#1A1A1A"
        }, 4)
        .to(".marcaPadre5 img", 0, {
            backgroundColor: "#1A1A1A"
        }, 4)
        .to(".marcaPadre6 img", 0, {
            backgroundColor: "#1A1A1A"
        }, 4)
        .to(".marcaPadre7 img", 0, {
            backgroundColor: "#1A1A1A"
        }, 4)
        .to(".marcaPadre8 img", 0, {
            backgroundColor: "#1A1A1A"
        }, 4)
        .to(".marcaPadre9 img", 0, {
            backgroundColor: "#1A1A1A"
        }, 4)
        .to(".marcaPadre6 img", 1, {
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)"
        })
        .to(".marcaPadre7 img", 1, {
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)"
        })
        .to(".marcaPadre8 img", 1, {
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)"
        })
        .to(".marcaPadre9 img", 1, {
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)"
        })

    let escena9 = new ScrollMagic.Scene({
            triggerElement: "#pin",
            duration: "2000%",
            triggerHook: 0
        })
        .setTween(tl2)
        .setPin("#pin")
        .addTo(controller);

});

var circle = document.querySelector(".circle");

TweenLite.set(circle, {
    xPercent: -50,
    yPercent: -50
});

window.addEventListener("mousemove", moveCircle);

function moveCircle(e) {
    TweenLite.to(circle, 0.3, {
        x: e.clientX,
        y: e.clientY,
        ease: Power2.easeOut
    });
}
