// =====================
// THEME TOGGLE (Desktop + Mobile)
// =====================

const body = document.body;
const desktopBtn = document.getElementById("theme-toggle");
const mobileBtn = document.getElementById("theme-toggle-mobile");

// Load saved theme
const savedTheme = localStorage.getItem("novaverse-theme");

// Default to Dark Mode unless "light" is explicitly saved
if (savedTheme === "light") {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    setButtonsToLight();
} else {
    // Default or explicitly dark
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    setButtonsToDark();
}

// Main toggle function
function toggleTheme() {
    if (body.classList.contains("dark-theme")) {
        // Switch to light
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        localStorage.setItem("novaverse-theme", "light");
        setButtonsToLight();
    } else {
        // Switch to dark
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        localStorage.setItem("novaverse-theme", "dark");
        setButtonsToDark();
    }
}

// Button label helpers
function setButtonsToDark() {
    if (desktopBtn) desktopBtn.textContent = "☀ Light";
    if (mobileBtn) mobileBtn.textContent = "☀ Light";
}

function setButtonsToLight() {
    if (desktopBtn) desktopBtn.textContent = "☾ Dark";
    if (mobileBtn) mobileBtn.textContent = "☾ Dark";
}

// Add event listeners
if (desktopBtn) desktopBtn.addEventListener("click", toggleTheme);
if (mobileBtn) mobileBtn.addEventListener("click", toggleTheme);


// =====================
// IMAGE MODAL (Your code kept same)
// =====================

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


// =====================
// MOBILE MENU
// =====================

const menuOverlay = document.getElementById("mobileMenuOverlay");

function toggleMenu() {
    const isOpen = menuOverlay.classList.contains("show");

    if (isOpen) {
        menuOverlay.classList.remove("show");
        document.body.style.overflow = ""; // Restore scrolling
    } else {
        menuOverlay.classList.add("show");
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
}
