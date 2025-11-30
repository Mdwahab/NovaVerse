// =====================
// THEME TOGGLE (Desktop + Mobile)
// =====================

const body = document.body;
const desktopBtn = document.getElementById("theme-toggle");
const mobileBtn = document.getElementById("theme-toggle-mobile");

// Load saved theme
const savedTheme = localStorage.getItem("novaverse-theme");

if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    setButtonsToDark();
} else {
    body.classList.add("light-theme");
    setButtonsToLight();
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

const menu = document.getElementById("mobileMenu");

function toggleMenu() {
    menu.classList.toggle("show");
}
