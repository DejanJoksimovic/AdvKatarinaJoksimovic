// HAMBURGER MENU

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

// CLOSE MENU WHEN LINK CLICKED

const menuLinks = mobileMenu.querySelectorAll("a");

menuLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        if (
            window.matchMedia('(min-width: 769px)').matches &&
            link.getAttribute('href') === '#biografija'
        ) {
            // event.preventDefault();

            const targetSection = document.querySelector('#biografija');
            if (targetSection) {
                const offset = -100;
                const top = Math.max(targetSection.offsetTop + offset, 0);
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }

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
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 4px 20px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow =
            "none";

    }

    if (scrollTopBtn) {
        if (window.scrollY > 120) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

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

// CONSULTATION BUTTON BEHAVIOR
const consultationBtns = document.querySelectorAll('.consultation-btn');

const isMobile = () => {
    return window.matchMedia('(max-width: 768px)').matches;
};

consultationBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const phoneNumber = btn.dataset.phone || '+38163434047';
        const front = btn.querySelector('.front');

        if (isMobile()) {
            window.location.href = `tel:${phoneNumber}`;
            return;
        }

        // desktop: show number on the front face instead of performing 3D flip
        if (!btn.dataset.origLabel) {
            btn.dataset.origLabel = front.textContent.trim();
        }

        if (btn.classList.contains('number-shown')) {
            // restore
            front.textContent = btn.dataset.origLabel;
            btn.classList.remove('number-shown');
        } else {
            // show number on front
            front.textContent = "062/351-611";
            btn.classList.add('number-shown');
        }
    });
});

