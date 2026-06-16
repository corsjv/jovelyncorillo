// Mobile Navbar Toggle
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Experience Vertical Tabs Logic
const expLinks = document.querySelectorAll(".nav-links-exp a");
const expBoxes = document.querySelectorAll(".exp-box");

expLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove active markers from nav items
        expLinks.forEach(l => l.classList.remove("active-nav"));
        // Remove visibility from description layouts
        expBoxes.forEach(box => box.classList.remove("active"));

        // Highlight current clicked item
        link.classList.add("active-nav");
        const target = document.querySelector(link.getAttribute("href"));
        if(target) {
            target.classList.add("active");
        }
    });
});

// Set initial view state for experience block
const initialExp = document.querySelector("#accenture");
if(initialExp) {
    initialExp.classList.add("active");
}

// Portfolio Multi-tab Filtering Logic
const projectBtns = document.querySelectorAll(".project-btn");
const projectGalleries = document.querySelectorAll(".project-gallery");

projectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        projectBtns.forEach(b => b.classList.remove("active"));
        projectGalleries.forEach(g => g.classList.remove("active"));

        btn.classList.add("active");
        const targetedGallery = document.getElementById(btn.dataset.target);
        if(targetedGallery) {
            targetedGallery.classList.add("active");
        }
    });
});
