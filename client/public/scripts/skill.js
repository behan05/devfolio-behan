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
        x: -200,
        duration: 1,
        rotation: 360,

    })
    tl.from(".header__menu ul li", {
        y: -100,
        stagger: 0.1
    })
}


function skillSection() {
    gsap.from(".skill", {
        y: -200,
        opacity: 0,
        stagger: 0.1
    })
}

function projects() {
    gsap.from(".project", {
        x: -400,
        opacity: 0,
        stagger: 0.4,
        scrollTrigger: {
            trigger: ".project__section",
            start: "top 70%",
            end: "top 50%",
            pin: true,
            scrub: 2,
        }
    })
}


window.addEventListener("DOMContentLoaded", () => {
    const closeMenuIcon = document.querySelector(".closeMenu");
    closeMenuIcon.style.display = "none";
    menuButton();
    headerGsap();
    skillSection();
    projects();
})