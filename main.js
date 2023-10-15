const navItems = document.querySelectorAll('.nav_items');
const navBtn = document.querySelector('.burger-btn');
const navBar = document.querySelector('.nav');
const arrowUp = document.querySelector('.arrow-up');

const handleNav = () => {
	navBtn.addEventListener('click', () => {
		navBar.classList.toggle('active');
	});
};

handleNav();

navItems.forEach((item) => {
	item.addEventListener('click', () => {
		navBar.classList.remove('active');
	});
});

let scrollPos = 600;

function checkPosition() {
	if (scrollY >= scrollPos) {
		// Scrolling UP
		arrowUp.classList.add('visible');
	} else {
		arrowUp.classList.remove('visible');
	}

	scrollPos = scrollY;
}

window.addEventListener('scroll', checkPosition);
