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

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
		// else {
		// 	entry.target.classList.remove('show');
		// }
	});
});

hiddenElements.forEach((el) => observer.observe(el));



const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',

	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
	autoplay: {
		delay: 3000,
	  },
  });
  