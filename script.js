// import { gsap } from "gsap";

function show(element){
    element.querySelector("svg").style.display = "block"
}

function hide(element){
    element.querySelector("svg").style.display = "none"
}

var timeline = new TimelineMax();
    timeline.from(".hero", 0.3, {y:-100, opacity:0},0.2)
    timeline.from(".currently", 0.3, {y:100, opacity:0},0.2)
    timeline.from(".list", 0.3, {y:100, opacity:0},0.2)

gsap.from(".projects", {
    scrollTrigger: {
        trigger: ".projects",
        start: 500
    },
    y: 100,
    opacity: 0,
})

gsap.from(".more", {
    scrollTrigger: {
        trigger: ".more",
        start: 1200
    },
    y: 100,
    opacity: 0,
})
