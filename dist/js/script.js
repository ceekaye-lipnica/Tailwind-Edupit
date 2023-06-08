const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".dropdown-nav");
const header = document.querySelector(".header");
const body = document.querySelector("body");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
	mobileNav.classList.toggle("open");
    header.classList.toggle("open");
});


const links = document.querySelectorAll(".dropdown-nav-parent h3");
links.forEach((drop) => {
	drop.addEventListener("click", () => {
		drop.nextElementSibling.classList.toggle("open");
		drop.querySelector("i").classList.toggle("open");
	});
});

const linksChild2 = document.querySelectorAll(".dropdown-nav-child-2 a");
linksChild2.forEach((drop2) => {
	drop2.addEventListener("click", () => {
		drop2.nextElementSibling.classList.toggle("open");
		drop2.querySelector("i").classList.toggle("open");
	});
});

const linksChild3 = document.querySelectorAll(".dropdown-nav-child-4 a");
linksChild3.forEach((drop3) => {
	drop3.addEventListener("click", () => {
		drop3.nextElementSibling.classList.toggle("open");
		drop3.querySelector("i").classList.toggle("open");
	});
});