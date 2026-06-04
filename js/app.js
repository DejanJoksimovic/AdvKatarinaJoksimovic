// HAMBURGER MENU

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

// CLOSE MENU WHEN LINK CLICKED

const menuLinks = mobileMenu.querySelectorAll("a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

// BIOGRAPHY DRAWER

const bioBtn = document.getElementById("bioBtn");
const bioDrawer = document.getElementById("bioDrawer");
const closeDrawer = document.getElementById("closeDrawer");

bioBtn.addEventListener("click", () => {
    bioDrawer.classList.add("active");
});

closeDrawer.addEventListener("click", () => {
    bioDrawer.classList.remove("active");
});

// CLOSE DRAWER IF USER CLICKS OUTSIDE

document.addEventListener("click", (event) => {

    const clickedDrawer =
        bioDrawer.contains(event.target);

    const clickedButton =
        bioBtn.contains(event.target);

    if (
        bioDrawer.classList.contains("active") &&
        !clickedDrawer &&
        !clickedButton
    ) {
        bioDrawer.classList.remove("active");
    }
});

// ESC KEY SUPPORT

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        bioDrawer.classList.remove("active");
        mobileMenu.classList.remove("active");

    }

});

// HEADER SHADOW ON SCROLL

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 4px 20px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow =
            "none";

    }

});

// ACTIVE MENU CLOSE WHEN CLICKING OUTSIDE

document.addEventListener("click", (event) => {

    const clickedMenu =
        mobileMenu.contains(event.target);

    const clickedHamburger =
        menuBtn.contains(event.target);

    if (
        mobileMenu.classList.contains("active") &&
        !clickedMenu &&
        !clickedHamburger
    ) {

        mobileMenu.classList.remove("active");

    }

});

// MOBILE ONLY: Android consultation dialing
const consultationBtns = document.querySelectorAll('.consultation-btn');

const isMobileAndroid = () => {
    return window.matchMedia('(max-width: 768px)').matches &&
        /Android/i.test(navigator.userAgent);
};

consultationBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        if (!isMobileAndroid()) return;
        const phoneNumber = btn.dataset.phone || '+38163434047';
        window.location.href = `tel:${phoneNumber}`;
    });
});

