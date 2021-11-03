//Module with animations during scroll
'use strict';

import offsetSkillsSection from './offsetSkillsSection';
import educationSectionAnim from './educationSectionAnim';
import leaveHomeScreen from './leaveHomeScreenAnim';
import titleAnim from './titleAnim';

export function animate() {
	const doc = document;
	let isScrolling = false;

	const isOpenedSkills = {
		tec: false,
		instr: false,
		knol: false,
	};

	const skillsItemSelectors = {
		technologies: '.progress__line_tec',
		instruments: '.progress__line_instruments',
		knowledge: '.skills__knowledge-item',
	};

	//Scroll Event
	window.addEventListener('scroll', throttleScroll, false);
	offsetSkillsSection(isOpenedSkills, '.skills__wrapper', '.skills__container', '.skills__title', skillsItemSelectors);

	function throttleScroll(e) {
		if (isScrolling == false) {
			window.requestAnimationFrame(function () {
				scroll(e);
				isScrolling = false;
			});
		}
		isScrolling = true;
	}

	//Scroll function
	function scroll(e) {
		//Menu button animation
		leaveHomeScreen('.hamburger', '.promo__title');

		//Main title animation
		titleAnim('.promo__title', '.about__subtitle');

		//Skills Section animation
		offsetSkillsSection(isOpenedSkills, '.skills__wrapper', '.skills__container', '.skills__title', skillsItemSelectors);

		//Education Section animation
		educationSectionAnim('.education__line', '.education__column-title', '.education__column', '.education__item');
	}
}
