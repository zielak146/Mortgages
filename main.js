const navItems = document.querySelectorAll('.nav_items');
const navBtn = document.querySelector('.burger-btn');
const navBar = document.querySelector('.nav');

const handleNav = () => {
	navBtn.addEventListener('click', () => {
		navBar.classList.toggle('active');
	});
};

handleNav();

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navBar.classList.remove('active')
    })
})
