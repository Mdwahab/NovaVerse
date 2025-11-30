// ================================
// THEME TOGGLE (FIXED)
// ================================
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("novaverse-theme");

if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeToggleBtn.textContent = "☀ Light";
} else {
    themeToggleBtn.textContent = "☾ Dark";
}

themeToggleBtn.addEventListener("click", () => {
    if (body.classList.contains("dark-theme")) {
        // Switch to LIGHT mode
        body.classList.remove("dark-theme");
        themeToggleBtn.textContent = "☾ Dark";
        localStorage.setItem("novaverse-theme", "light");
    } else {
        // Switch to DARK mode
        body.classList.add("dark-theme");
        themeToggleBtn.textContent = "☀ Light";
        localStorage.setItem("novaverse-theme", "dark");
    }
});


// ================================
// IMAGE MODAL
// ================================
let modalImages = [];
let currentIndex = 0;

function openModal(src, list = []) {
    modalImages = list;
    currentIndex = modalImages.indexOf(src);

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


// ================================
// MOBILE MENU
// ================================
const navToggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
    });
}
