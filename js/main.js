AOS.init();

AOS.init({
	offset: 120, // Animation starts 120 pixels down from the top.
	delay: 0, //Animation starts immediately when the element becomes visible.
	duration: 700, //Animation takes 0.7 seconds to complete.
	easing: "ease", // Smooth motion in and out.
	once: false, //Animation plays each time the element comes into view.
	mirror: false, //Animation doesn't repeat when the user scrolls in the opposite direction.
	anchorPlacement: "top-bottom", //Animation starts when element top is visible, ends when fully shown.
});

// Selectors for sections and navigation links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function activemenu() {
	let currentSectionIndex = sections.length;
	while (--currentSectionIndex && window.scrollY + 97 < sections[currentSectionIndex].offsetTop) { }
	navLinks.forEach(link => link.classList.remove("active"));
	if (navLinks[currentSectionIndex]) {
		navLinks[currentSectionIndex].classList.add("active");
	}
}
activemenu();
window.addEventListener("scroll", activemenu);

// links active on click
document.addEventListener('DOMContentLoaded', function () {
	const navLinks = document.querySelectorAll('.nav-link');
	navLinks.forEach(link => {
		link.addEventListener('click', function () {
			document.querySelector('.nav-link.active').classList.remove('active');
			this.classList.add('active');
		});
	});
});