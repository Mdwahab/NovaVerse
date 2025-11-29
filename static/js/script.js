// Theme toggle (light/dark)
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme (if any)
const savedTheme = localStorage.getItem("novaverse-theme");

if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeToggleBtn.textContent = "Theme  ☀";
} else {
    body.classList.add("light-theme");
    themeToggleBtn.textContent = "Theme  ☾";
}

themeToggleBtn.addEventListener("click", () => {
    if (body.classList.contains("dark-theme")) {
        // Switch to light
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        themeToggleBtn.textContent = "Theme  ☾";
        localStorage.setItem("novaverse-theme", "light");
    } else {
        // Switch to dark
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        themeToggleBtn.textContent = "Theme  ☀";
        localStorage.setItem("novaverse-theme", "dark");
    }
});

let modalImages = [];
let currentIndex = 0;

function openModal(src, list = []) {
    modalImages = list;
    currentIndex = modalImages.indexOf(src.replace(window.location.origin + "/", ""));
    
    document.getElementById("modalImg").src = src;
    document.getElementById("imgModal").classList.add("show");
}
function closeModal() {
    document.getElementById("imgModal").classList.remove("show");
}
function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % modalImages.length;
    document.getElementById("modalImg").src = modalImages[currentIndex];
}

function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + modalImages.length) % modalImages.length;
    document.getElementById("modalImg").src = modalImages[currentIndex];
}
// Mobile Menu Toggle
const navToggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        if (mobileMenu.style.display === "flex") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "flex";
        }
    });
}
