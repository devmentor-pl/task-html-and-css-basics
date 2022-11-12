const nav = document.querySelector('.nav');

function addShadow() {
	if (window.scrollY >= 40) {
		nav.classList.add('shadow-bg');
	} else {
		nav.classList.remove('shadow-bg');
	}
}

window.addEventListener('scroll', addShadow);
