const nav = document.querySelector('nav');

window.onscroll = () => {
	if (window.scrollY >= 350) {
		nav.classList.add('nav-colored');
		nav.classList.remove('nav-transparent');
	} else {
		nav.classList.add('nav-transparent');
		nav.classList.remove('nav-colored');
	}
};
