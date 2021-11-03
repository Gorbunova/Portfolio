'use strict';

import { animate } from './animation/animationScript.js';
import openMenu from './openMenu.js';
import firstScreenAnim from './animation/firstScreenAnim.js';
import sapperSlider from './sapperSlider.js';
import smoothLinks from './smoothLinks.js';
import offsetPortfolioItems from './offsetPortfolioItems.js';

const doc = document;

doc.addEventListener('DOMContentLoaded', function () {
	firstScreenAnim('.first-screen__top', '.first-screen__bottom', '.first-screen__name', '.first-screen__surname');
	animate();
	sapperSlider('.portfolio__photo-sapper', '.portfolio__checkbox');

	const screenWidth = doc.documentElement.clientWidth;
	offsetPortfolioItems(screenWidth, '.portfolio__item');

	const hamburger = doc.querySelector('.hamburger');
	hamburger.addEventListener('click', () => openMenu(hamburger, '.content', '.sidepanel'));

	smoothLinks();
});
