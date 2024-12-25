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

function downloadResume() {
    const downloadBtn = document.querySelector("button");
    const toast = document.querySelector("#toast");

    downloadBtn.addEventListener("click", (e) => {
        e.preventDefault();

        // Create a link element for the download
        const anchor = document.createElement("a");
        anchor.href = "https://raw.githubusercontent.com/behan05/images/main/Behan-kumar-resume.pdf"; // Raw file URL
        anchor.download = "Behan_Kumar_Resume.pdf"; // Set the filename for download

        // Append to body and trigger a click event to download
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);

        // Show the toast message
        toast.style.display = "block";

        // Hide the toast message after 3 seconds
        setTimeout(() => {
            toast.style.display = "none";
        }, 3000);
    });
}



window.addEventListener("DOMContentLoaded", () => {
    const closeMenuIcon = document.querySelector(".closeMenu");
    closeMenuIcon.style.display = "none";
    menuButton();
    headerGsap();
    downloadResume();
})