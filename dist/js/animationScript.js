'use strict';

import { isFullyVisible, isPartiallyVisible, setSteppedAnimation, setAnimation } from './animationFunctions.js';

export function animate() {
	const doc = document;

	var isScrolling = false;
	var isOpened = false;
	var isOpened2 = false;
	var isOpened3 = false;

	window.addEventListener('scroll', throttleScroll, false);
	setSkillsOffset();

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
		setSkillsOffset();
		leaveHomeScreen();
		headerWrapping();

		//Education Section animation
		const line = doc.querySelector('.education__line'),
			columnTitles = doc.querySelectorAll('.education__column-title'),
			column = doc.querySelectorAll('.education__column'),
			item = doc.querySelectorAll('.education__item');

		setAnimation(isFullyVisible(line), line, false);

		setTimeout(() => {
			setSteppedAnimation(isFullyVisible(columnTitles[0]), 0, columnTitles, false);

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
		//Skills section animation
		const screenWidth = window.screen.width;
		if (screenWidth < 769) {
			const skillsTecLines = doc.querySelectorAll('.progress__line_tec');
			const skillsTec = doc.querySelector('.skills__technologies');

			const skillsInstrLines = doc.querySelectorAll('.progress__line_instruments');
			const skillsInstr = doc.querySelector('.skills__instruments');

			const skillsKnolsItems = doc.querySelectorAll('.skills__knowledge-item');
			const skillsKnol = doc.querySelector('.skills__knowledge');

			if (isPartiallyVisible(skillsTec) && isOpened === false) {
				setProgressNums(skillsTecLines);
				isOpened = true;
			} else if (isPartiallyVisible(skillsInstr) && isOpened2 === false) {
				setProgressNums(skillsInstrLines);
				isOpened2 = true;
			} else if (isPartiallyVisible(skillsKnol) && isOpened3 === false) {
				setSteppedAnimation(true, 0, skillsKnolsItems, false);
				isOpened3 = true;
			}
		}
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

	function setSkillsOffset() {
		const skillsWrapper = doc.querySelector('.skills__wrapper'),
			skillsVisible = doc.querySelector('.skills__container'),
			screenWidth = window.screen.width;
		if (screenWidth < 769) {
			return;
		}
		skillsWrapper.style.transform = `translateX(-${skillsVisible.offsetTop}px)`;
		const part = Math.round(skillsVisible.offsetTop / screenWidth);
		setSkillsParts(part);

		if (skillsVisible.offsetTop > 0 && part === 0 && isOpened === false) {
			const skillsTecLines = doc.querySelectorAll('.progress__line_tec');
			setProgressNums(skillsTecLines);
			isOpened = true;
		} else if (part === 1 && isOpened2 === false) {
			const skillsLines = doc.querySelectorAll('.progress__line_instruments');
			setProgressNums(skillsLines);
			isOpened2 = true;
		} else if (part === 2 && isOpened3 === false) {
			const skillsKnols = doc.querySelectorAll('.skills__knowledge-item');
			setSteppedAnimation(true, 0, skillsKnols, false);
			isOpened3 = true;
		}
	}

	function setVisibleLines() {
		const skillsLines = doc.querySelectorAll('.progress__line_instruments');
		setProgressNums(skillsLines);
	}

	function getTopCoords(elem) {
		let box = elem.getBoundingClientRect();

		return box.top + window.scrollY;
	}

	function removeSkillsParts() {
		const skillsParts = doc.querySelectorAll('.skills__title');
		skillsParts.forEach((part) => {
			part.classList.remove('skills__title_active');
		});
	}

	function setSkillsParts(index) {
		const skillsParts = doc.querySelectorAll('.skills__title');
		removeSkillsParts();
		skillsParts[index].classList.add('skills__title_active');
	}

	function setProgressBars(item, percent) {
		item.style.width = percent + '%';
	}

	function setProgressNums(progressLines) {
		progressLines.forEach((line) => {
			const percent = line.parentElement.nextElementSibling.innerHTML.replace('%', '');
			setNum(line, percent, 0);
		});
	}

	function setNum(item, percent, curIndex) {
		if (curIndex <= percent) {
			item.parentElement.nextElementSibling.innerHTML = curIndex + '%';
			setProgressBars(item, curIndex);
			setTimeout(() => {
				setNum(item, percent, curIndex + 1);
			}, 20);
		}
	}
}
