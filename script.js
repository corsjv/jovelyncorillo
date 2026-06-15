const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const expLinks = document.querySelectorAll(".nav-links-exp a");
const expBoxes = document.querySelectorAll(".exp-box");

expLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        expBoxes.forEach(box => box.classList.remove("active"));

        const target = document.querySelector(link.getAttribute("href"));
        target.classList.add("active");
    });
});

document.querySelector("#accenture").classList.add("active");

const projectBtns = document.querySelectorAll(".project-btn");
const projectGalleries = document.querySelectorAll(".project-gallery");

projectBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        projectBtns.forEach(b =>
            b.classList.remove("active")
        );

        projectGalleries.forEach(g =>
            g.classList.remove("active")
        );

        btn.classList.add("active");

        document
            .getElementById(btn.dataset.target)
            .classList.add("active");
    });

});