gsap.registerPlugin(ScrollTrigger);

document.querySelector("img").addEventListener("contextmenu", (e) => {
    e.preventDefault();
})

function menuButton() {
    const openMenuIcon = document.querySelector(".openMenu");
    const closeMenuIcon = document.querySelector(".closeMenu");
    const header__menu = document.querySelector(".header__menu");

    openMenuIcon.addEventListener("click", (e) => {
        closeMenuIcon.style.display = "block";
        openMenuIcon.style.display = "none";
        header__menu.style.display = "block";

    })
    closeMenuIcon.addEventListener("click", (e) => {
        closeMenuIcon.style.display = "none";
        openMenuIcon.style.display = "block";
        header__menu.style.display = "none";

    })
}

// GSAP Code.
function headerGsap() {
    const tl = gsap.timeline()
    tl.from("#header__logo", {
        y: -200,
        opacity: 0,
        duration: 0.6,
    })
    tl.from(".header__menu ul li", {
        y: -100,
        stagger: 0.1
    })
}

function firstBox() {
    const tl = gsap.timeline()
    tl.from(".leftBox h1", {
        x: -400,
        opacity: 0,
        duration: 1
    })

    tl.from(".rightBox img", {
        scale: 0,
        opacity: 0
    })
}

function secondBoxTrigger() {
    gsap.from("#second__section", {
        scale: 0,
        opacity: 0,
        duration: 0.2, // Add duration for better effect
        ease: "slow", // Add easing for smoother animation
        scrollTrigger: {
            trigger: "#second__section",
            start: "top 180%", // Trigger starts when section is near bottom of the viewport
            end: "top 40%", // Ends when section is closer to the top of the viewport
            scrub: 1, // Smooth scrubbing effect
        },
    });
}


window.addEventListener("DOMContentLoaded", () => {
    const closeMenuIcon = document.querySelector(".closeMenu");
    closeMenuIcon.style.display = "none";
    menuButton();
    headerGsap();
    firstBox();
    secondBoxTrigger();
})