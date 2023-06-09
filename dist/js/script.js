const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".dropdown-nav");
const header = document.querySelector(".header");
const body = document.querySelector("body");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
	mobileNav.classList.toggle("open");
    header.classList.toggle("open");
});

// HEADER MOBILE 
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

// HEADER DESKTOP
const float = document.querySelectorAll(".header-float-nav-parent h3");
float.forEach((float1) => {
	float1.addEventListener("click", () => {
		float1.nextElementSibling.classList.toggle("open");
		float1.querySelector("i").classList.toggle("open");
	});
});

const floatChild2 = document.querySelectorAll(".header-float-nav-child-2 a");
floatChild2.forEach((float2) => {
	float2.addEventListener("click", () => {
		float2.nextElementSibling.classList.toggle("open");
		float2.querySelector("i").classList.toggle("open");
	});
});

const floatChild3 = document.querySelectorAll(".header-float-nav-child-4 a");
floatChild3.forEach((float3) => {
	float3.addEventListener("click", () => {
		float3.nextElementSibling.classList.toggle("open");
		float3.querySelector("i").classList.toggle("open");
	});
});