const menuOpen = document.querySelector('.js-menu-open'),
menuClose = document.querySelector('.js-menu-close');

[menuOpen, menuClose].forEach(menuItem => {
	menuItem.removeAttribute('href');
	menuItem.setAttribute('tabindex', '-1');
	menuItem.firstChild.setAttribute('tabindex', '0');
});

menuOpen.addEventListener('click', event => {
	event.preventDefault();
	document.querySelector('.js-menu').classList.add('header__menu--open');
}, false);

menuClose.addEventListener('click', event => {
	event.preventDefault();
	if (location.hash == '#_menu') location.hash = '';
	const menu = document.querySelector('.js-menu');
	menu.classList.remove('header__menu--open');
	menu.classList.add('header__menu--invisible');
	setTimeout(() => menu.classList.remove('header__menu--invisible'), parseFloat(getComputedStyle(menu).animationDuration) * 1000);
}, false);

window.addEventListener('load', () => document.querySelector('.page').classList.add('page--image-ready'), false);
navigator.serviceWorker.register('{{ . }}'); // hugo template
