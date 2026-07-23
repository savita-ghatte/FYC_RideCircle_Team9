/* ================= NAVBAR ================= */

const navbar = document.querySelector(".navbar");
const hoverBg = document.querySelector(".hover-bg");
const links = document.querySelectorAll(".nav-link");

if (navbar && hoverBg && links.length > 0) {

    function moveHighlight(link) {

        hoverBg.style.width = link.offsetWidth + "px";
        hoverBg.style.height = link.offsetHeight + "px";

        hoverBg.style.left = link.offsetLeft + "px";
        hoverBg.style.top = link.offsetTop + "px";

        if (link.classList.contains("active")) {
            hoverBg.style.background = "rgba(255,152,0,.12)";
            hoverBg.style.border = "1px solid rgba(255,152,0,.35)";
        } else {
            hoverBg.style.background = "rgba(255,255,255,.06)";
            hoverBg.style.border = "1px solid rgba(255,255,255,.08)";
        }
    }

    const activeLink = document.querySelector(".nav-link.active");

    if (activeLink) {
        moveHighlight(activeLink);
    }

    links.forEach(link => {

        link.addEventListener("mouseenter", () => {
            moveHighlight(link);
        });

        link.addEventListener("click", (e) => {

            e.preventDefault();

            const current = document.querySelector(".nav-link.active");

            if (current) {
                current.classList.remove("active");
            }

            link.classList.add("active");

            moveHighlight(link);

        });

    });

    navbar.addEventListener("mouseleave", () => {

        const active = document.querySelector(".nav-link.active");

        if (active) {
            moveHighlight(active);
        }

    });

}


/* ================= FAQ ACCORDION ================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});