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

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
	if (this.scrollY > 0) {
		navbar.classList.remove("py-3");
		navbar.classList.add("shadow", "py-2");
	} else {
		navbar.classList.add("py-3");
		navbar.classList.remove("shadow", "py-2");
	}
});

