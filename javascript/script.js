// Hamburger Menu
console.log("Hamburger Menu");


const hamburgerBtn = document.getElementById("hamburgerBtn");
const nav = document.querySelector("nav");
const exitBtn = document.getElementById("exitBtn");

hamburgerBtn.addEventListener("click", () => {
    nav.classList.add("menuBtnActive");
});

exitBtn.addEventListener("click", () => {
    nav.classList.remove("menuBtnActive");
});





