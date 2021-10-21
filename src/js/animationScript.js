'use strict';

import {
	isFullyVisible,
	isPartiallyVisible,
	setSteppedAnimation,
	setAnimation,
} from './animationFunctions.js';

export function animate() {
	const doc = document;

	var isScrolling = false;

	window.addEventListener('scroll', throttleScroll, false);

	function throttleScroll(e) {
		if (isScrolling == false) {
			window.requestAnimationFrame(function () {
				scroll(e);
				isScrolling = false;
			});
		}
		isScrolling = true;
	}

	function scroll(e) {
		leaveHomeScreen();
		headerWrapping();

		//Education Section animation
		const line = doc.querySelector('.education__line'),
			columnTitles = doc.querySelectorAll('.education__column-title'),
			column = doc.querySelectorAll('.education__column'),
			item = doc.querySelectorAll('.education__item');

		setAnimation(isFullyVisible(line), line, false);

		setTimeout(() => {
			setSteppedAnimation(
				isFullyVisible(columnTitles[0]),
				0,
				columnTitles,
				false
			);

			setTimeout(() => {
				column.forEach((col) => {
					setAnimation(isFullyVisible(column[0]), col, false);
				});
				setTimeout(() => {
					item.forEach((item) => {
						setAnimation(isFullyVisible(column[0]), item, false);
					});
				}, 1000);
			}, 2000);
		}, 1000);
	}

	function leaveHomeScreen() {
		const hamburger = doc.querySelector('.hamburger'),
			promoTitle = doc.querySelector('.promo__title');
		if (window.scrollY > 0) {
			hamburger.classList.add('hamburger_up');
			promoTitle.classList.remove('promo__title_underlined');
			promoTitle.classList.add('promo__title_active');
		} else {
			hamburger.classList.remove('hamburger_up');
			promoTitle.classList.add('promo__title_underlined');
			promoTitle.classList.remove('promo__title_active');
		}
	}

	function headerWrapping() {
		const promoTitle = doc.querySelector('.promo__title'),
			aboutSubtitle = doc.querySelector('.about__subtitle');

		if (getTopCoords(promoTitle) >= getTopCoords(aboutSubtitle)) {
			aboutSubtitle.style.transition = 'none';
			aboutSubtitle.style.opacity = '1';
			promoTitle.style.opacity = '0';
			aboutSubtitle.classList.add('about__subtitle_active');
		} else if (getTopCoords(promoTitle) < getTopCoords(aboutSubtitle)) {
			aboutSubtitle.style.transition = '.2s all';
			aboutSubtitle.classList.remove('about__subtitle_active');
			promoTitle.style.opacity = '1';
			aboutSubtitle.style.opacity = '0';
		}
	}

	function getTopCoords(elem) {
		let box = elem.getBoundingClientRect();

		return box.top + pageYOffset;
	}
}
