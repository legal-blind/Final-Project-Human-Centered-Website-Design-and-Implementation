
// Toggle mobile menu
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
        const open = menu.classList.contains("open");
        if (open) {
            menu.classList.remove("open");
        } else {
            menu.classList.add("open");
        }
    });
}

// Simple gallery viewer
const galleryImages = document.querySelectorAll(".gallery-img");
const viewer = document.querySelector("#viewer");
const viewerImg = document.querySelector("#viewer-img");
const viewerClose = document.querySelector("#viewer-close");

if (galleryImages.length && viewer && viewerImg && viewerClose) {
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            viewerImg.src = img.src;
            viewer.classList.add("show");
        });
    });

    viewerClose.addEventListener("click", () => {
        viewer.classList.remove("show");
    });
}

// Simple form validation for contact page
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", e => {
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const message = document.querySelector("#message");

        if (!name.value || !email.value || !message.value) {
            e.preventDefault();
            alert("Fill out all fields.");
        }
    });
}
