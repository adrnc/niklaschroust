const menuOpen = document.querySelector('.js-menu-open'),
menuClose = document.querySelector('.js-menu-close');

menuOpen.removeAttribute('href');
menuOpen.addEventListener('click', event => {
	event.preventDefault();
	document.querySelector('.js-menu').classList.add('header__menu--open');
}, false);

menuClose.removeAttribute('href');
menuClose.addEventListener('click', event => {
	event.preventDefault();
	const menu = document.querySelector('.js-menu');
	menu.classList.remove('header__menu--open');
	menu.classList.add('header__menu--invisible');
	setTimeout(() => {
		event.target.blur();
		menu.classList.remove('header__menu--invisible');
	}, parseFloat(getComputedStyle(menu).animationDuration) * 1000);
}, false);

window.addEventListener('load', () => document.querySelector('.page').classList.add('page--image-ready'), false);
navigator.serviceWorker.register('/sw.js');
