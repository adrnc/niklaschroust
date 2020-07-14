const menu = document.querySelector('.js-menu'),
menuOpen = document.querySelector('.js-menu-open'),
menuClose = document.querySelector('.js-menu-close'),

classMenuOpen = 'header__menu--open',
classMenuInvisible = 'header__menu--invisible';

menu.classList.add('header__menu--focusable');

menuOpen.removeAttribute('href');
menuOpen.addEventListener('click', event => {
	event.preventDefault();
	menu.classList.add(classMenuOpen);
}, false);

menuClose.removeAttribute('href');
menuClose.addEventListener('click', event => {
	event.preventDefault();
	if (location.hash == '#_menu') location.hash = '';
	menu.classList.remove(classMenuOpen);
	menu.classList.add(classMenuInvisible);
	setTimeout(() => {
		menuOpen.blur();
		menu.classList.remove(classMenuInvisible);
	}, parseFloat(getComputedStyle(menu).animationDuration) * 1000);
}, false);

window.addEventListener('load', () => document.querySelector('.page').classList.add('page--image-ready'), false);
