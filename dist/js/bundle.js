/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/animation/animationFunctions.js":
/*!************************************************!*\
  !*** ./src/js/animation/animationFunctions.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFullyVisible": function() { return /* binding */ isFullyVisible; },
/* harmony export */   "isPartiallyVisible": function() { return /* binding */ isPartiallyVisible; },
/* harmony export */   "setAnimation": function() { return /* binding */ setAnimation; },
/* harmony export */   "setSteppedAnimation": function() { return /* binding */ setSteppedAnimation; }
/* harmony export */ });
//Module with base animation functions


function isFullyVisible(item) {
	const elementBoundary = item.getBoundingClientRect();

	const top = elementBoundary.top;
	const bottom = elementBoundary.bottom;

	return top >= 0 && bottom <= window.innerHeight;
}

function isPartiallyVisible(item) {
	const elementBoundary = item.getBoundingClientRect();

	const top = elementBoundary.top;
	const bottom = elementBoundary.bottom;
	const height = elementBoundary.height;

	return top + height >= 0 && bottom <= height + window.innerHeight;
}

function setAnimation(condition, item, isrepeat) {
	if (condition) {
		item.classList.remove('hidden');
	} else if (isrepeat) {
		item.classList.add('hidden');
	}
}

function setSteppedAnimation(condition, index, arrayItems, isrepeat) {
	if (condition) {
		if (index + 1 <= arrayItems.length) {
			setTimeout(function () {
				arrayItems[index].classList.remove('hidden');
				setSteppedAnimation(condition, index + 1, arrayItems);
			}, 500);
		}
	} else if (isrepeat) {
		arrayItems.forEach((item) => {
			item.classList.remove('active');
		});
	}
}


/***/ }),

/***/ "./src/js/animation/animationScript.js":
/*!*********************************************!*\
  !*** ./src/js/animation/animationScript.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animate": function() { return /* binding */ animate; }
/* harmony export */ });
/* harmony import */ var _offsetSkillsSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offsetSkillsSection */ "./src/js/animation/offsetSkillsSection.js");
/* harmony import */ var _educationSectionAnim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./educationSectionAnim */ "./src/js/animation/educationSectionAnim.js");
/* harmony import */ var _leaveHomeScreenAnim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaveHomeScreenAnim */ "./src/js/animation/leaveHomeScreenAnim.js");
/* harmony import */ var _titleAnim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./titleAnim */ "./src/js/animation/titleAnim.js");
/* harmony import */ var _skillsSectionAnim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skillsSectionAnim */ "./src/js/animation/skillsSectionAnim.js");
//Module with animations during scroll








function animate() {
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
	(0,_offsetSkillsSection__WEBPACK_IMPORTED_MODULE_0__["default"])(isOpenedSkills, '.skills__wrapper', '.skills__container', '.skills__title', skillsItemSelectors);

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
		(0,_leaveHomeScreenAnim__WEBPACK_IMPORTED_MODULE_2__["default"])('.hamburger', '.promo__title');

		//Main title animation
		(0,_titleAnim__WEBPACK_IMPORTED_MODULE_3__["default"])('.promo__title', '.about__subtitle');

		//Skills Section animation
		(0,_offsetSkillsSection__WEBPACK_IMPORTED_MODULE_0__["default"])(isOpenedSkills, '.skills__wrapper', '.skills__container', '.skills__title', skillsItemSelectors);

		const screenWidth = window.screen.width;
		if (screenWidth < 769) {
			(0,_skillsSectionAnim__WEBPACK_IMPORTED_MODULE_4__["default"])(isOpenedSkills, skillsItemSelectors, '.skills__technologies', '.skills__instruments');
		}

		//Education Section animation
		(0,_educationSectionAnim__WEBPACK_IMPORTED_MODULE_1__["default"])('.education__line', '.education__column-title', '.education__column', '.education__item');
	}
}


/***/ }),

/***/ "./src/js/animation/educationSectionAnim.js":
/*!**************************************************!*\
  !*** ./src/js/animation/educationSectionAnim.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animationFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animationFunctions */ "./src/js/animation/animationFunctions.js");


const educationSectionAnim = (lineSelector, columnTitlesSelector, columnSelector, itemsSelector) => {
	const doc = document;
	const line = doc.querySelector(lineSelector),
		columnTitles = doc.querySelectorAll(columnTitlesSelector),
		column = doc.querySelectorAll(columnSelector),
		item = doc.querySelectorAll(itemsSelector);

	(0,_animationFunctions__WEBPACK_IMPORTED_MODULE_0__.setAnimation)((0,_animationFunctions__WEBPACK_IMPORTED_MODULE_0__.isFullyVisible)(line), line, false);
	setTimeout(() => {
		(0,_animationFunctions__WEBPACK_IMPORTED_MODULE_0__.setSteppedAnimation)((0,_animationFunctions__WEBPACK_IMPORTED_MODULE_0__.isFullyVisible)(columnTitles[0]), 0, columnTitles, false);
		setTimeout(() => {
			column.forEach((col) => {
				(0,_animationFunctions__WEBPACK_IMPORTED_MODULE_0__.setAnimation)((0,_animationFunctions__WEBPACK_IMPORTED_MODULE_0__.isFullyVisible)(column[0]), col, false);
			});
			setTimeout(() => {
				item.forEach((item) => {
					(0,_animationFunctions__WEBPACK_IMPORTED_MODULE_0__.setAnimation)((0,_animationFunctions__WEBPACK_IMPORTED_MODULE_0__.isFullyVisible)(column[0]), item, false);
				});
			}, 1000);
		}, 2000);
	}, 1000);
};
/* harmony default export */ __webpack_exports__["default"] = (educationSectionAnim);


/***/ }),

/***/ "./src/js/animation/firstScreenAnim.js":
/*!*********************************************!*\
  !*** ./src/js/animation/firstScreenAnim.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//First screen animation
function firstScreenAnim(topSelector, bottomSelector, nameSelector, surnameSelector) {
	const doc = document;
	const firstTop = doc.querySelector(topSelector);
	const firstBottom = doc.querySelector(bottomSelector);
	const firstName = doc.querySelector(nameSelector);
	const firstSurname = doc.querySelector(surnameSelector);
	firstName.style.opacity = `1`;
	firstSurname.style.opacity = `1`;
	setTimeout(() => {
		firstTop.style.transform = `translateY(-100%)`;
		firstBottom.style.transform = `translateY(100%)`;
		setTimeout(() => {
			firstTop.parentElement.style.display = 'none';
		}, 1000);
	}, 3000);
}
/* harmony default export */ __webpack_exports__["default"] = (firstScreenAnim);


/***/ }),

/***/ "./src/js/animation/leaveHomeScreenAnim.js":
/*!*************************************************!*\
  !*** ./src/js/animation/leaveHomeScreenAnim.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//Some animations of leaving main screen - menu button and main title animatons
function leaveHomeScreen(hamburgerSelector, titleSelector) {
	const hamburger = document.querySelector(hamburgerSelector),
		promoTitle = document.querySelector(titleSelector),
		hambClassActive = `${hamburgerSelector.replace('.', '')}_up`,
		titleClassUnderlined = `${titleSelector.replace('.', '')}_underlined`,
		titleClassActive = `${titleSelector.replace('.', '')}_active`;
	if (window.scrollY > 0) {
		hamburger.classList.add(hambClassActive);
		promoTitle.classList.remove(titleClassUnderlined);
		promoTitle.classList.add(titleClassActive);
	} else {
		hamburger.classList.remove(hambClassActive);
		promoTitle.classList.add(titleClassUnderlined);
		promoTitle.classList.remove(titleClassActive);
	}
}
/* harmony default export */ __webpack_exports__["default"] = (leaveHomeScreen);


/***/ }),

/***/ "./src/js/animation/offsetSkillsSection.js":
/*!*************************************************!*\
  !*** ./src/js/animation/offsetSkillsSection.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progressBars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progressBars */ "./src/js/animation/progressBars.js");
/* harmony import */ var _animationFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationFunctions */ "./src/js/animation/animationFunctions.js");
// Module with functions wich offset skills section horizontally



function offsetSkillsSection(isOpenedSkills, wrapperSelector, visibleSelector, skillsTitleSelector, skillsItemSelectors) {
	const { technologies, instruments, knowledge } = skillsItemSelectors;
	const doc = document;
	const maxOffsetWidth = 768;
	const skillsWrapper = doc.querySelector(wrapperSelector),
		skillsVisible = doc.querySelector(visibleSelector),
		screenWidth = window.screen.width;

	if (screenWidth <= maxOffsetWidth) {
		return;
	}

	skillsWrapper.style.transform = `translateX(-${skillsVisible.offsetTop}px)`;
	const part = Math.round(skillsVisible.offsetTop / screenWidth);
	setSkillsParts(part, skillsTitleSelector);

	if (skillsVisible.offsetTop > 0 && part === 0 && isOpenedSkills.tec === false) {
		(0,_progressBars__WEBPACK_IMPORTED_MODULE_0__["default"])(technologies);
		isOpenedSkills.tec = true;
	} else if (part === 1 && isOpenedSkills.instr === false) {
		(0,_progressBars__WEBPACK_IMPORTED_MODULE_0__["default"])(instruments);
		isOpenedSkills.instr = true;
	} else if (part === 2 && isOpenedSkills.knol === false) {
		const skillsKnols = doc.querySelectorAll(knowledge);
		(0,_animationFunctions__WEBPACK_IMPORTED_MODULE_1__.setSteppedAnimation)(true, 0, skillsKnols, false);
		isOpenedSkills.knol = true;
	}

	return isOpenedSkills;
}
// Animation change active part of skills section
function setSkillsParts(index, skillsTitleSelector) {
	const skillsParts = document.querySelectorAll(skillsTitleSelector),
		activeClass = `${skillsTitleSelector.replace('.', '')}_active`;
	removeSkillsParts(skillsTitleSelector, activeClass);
	skillsParts[index].classList.add(activeClass);
}

function removeSkillsParts(skillsTitleSelector, activeClass) {
	const skillsParts = document.querySelectorAll(skillsTitleSelector);
	skillsParts.forEach((part) => {
		part.classList.remove(activeClass);
	});
}

/* harmony default export */ __webpack_exports__["default"] = (offsetSkillsSection);


/***/ }),

/***/ "./src/js/animation/progressBars.js":
/*!******************************************!*\
  !*** ./src/js/animation/progressBars.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//Skills section's progress bars animation
function setProgressBars(item, percent) {
	item.style.width = percent + '%';
}

function setProgressNums(progressLinesSelector) {
	const progressLines = document.querySelectorAll(progressLinesSelector);
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
/* harmony default export */ __webpack_exports__["default"] = (setProgressNums);


/***/ }),

/***/ "./src/js/animation/skillsSectionAnim.js":
/*!***********************************************!*\
  !*** ./src/js/animation/skillsSectionAnim.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animationFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animationFunctions */ "./src/js/animation/animationFunctions.js");
/* harmony import */ var _progressBars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressBars */ "./src/js/animation/progressBars.js");



function skillsSectionAnim(isOpenedSkills, skillsItemSelectors, technologiesSelector, instrumentsSelector) {
	const doc = document;
	const { technologies, instruments, knowledge } = skillsItemSelectors;

	const skillsTec = doc.querySelector(technologiesSelector);
	const skillsInstr = doc.querySelector(instrumentsSelector);

	const skillsKnolsItems = doc.querySelectorAll(knowledge);

	if ((0,_animationFunctions__WEBPACK_IMPORTED_MODULE_0__.isPartiallyVisible)(skillsTec) && isOpenedSkills.tec === false) {
		(0,_progressBars__WEBPACK_IMPORTED_MODULE_1__["default"])(technologies);
		isOpenedSkills.tec = true;
	} else if ((0,_animationFunctions__WEBPACK_IMPORTED_MODULE_0__.isPartiallyVisible)(skillsInstr) && isOpenedSkills.instr === false) {
		(0,_progressBars__WEBPACK_IMPORTED_MODULE_1__["default"])(instruments);
		isOpenedSkills.instr = true;
	} else if ((0,_animationFunctions__WEBPACK_IMPORTED_MODULE_0__.isPartiallyVisible)(skillsKnolsItems[0]) && isOpenedSkills.knol === false) {
		(0,_animationFunctions__WEBPACK_IMPORTED_MODULE_0__.setSteppedAnimation)(true, 0, skillsKnolsItems, false);
		isOpenedSkills.knol = true;
	}
	return isOpenedSkills;
}

/* harmony default export */ __webpack_exports__["default"] = (skillsSectionAnim);


/***/ }),

/***/ "./src/js/animation/titleAnim.js":
/*!***************************************!*\
  !*** ./src/js/animation/titleAnim.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//Animation of main title in promo section
function titleAnim(mainTitleSelector, secondTitleSelector) {
	const doc = document;
	const promoTitle = doc.querySelector(mainTitleSelector),
		aboutSubtitle = doc.querySelector(secondTitleSelector),
		subtitleClassActive = `${secondTitleSelector.replace('.', '')}_active`;

	if (window.scrollY > 500) {
		promoTitle.style.opacity = '0';
	}

	if (getTopCoords(promoTitle) >= getTopCoords(aboutSubtitle)) {
		aboutSubtitle.style.transition = 'none';
		aboutSubtitle.style.opacity = '1';
		promoTitle.style.opacity = '0';
		aboutSubtitle.classList.add(subtitleClassActive);
	} else if (getTopCoords(promoTitle) < getTopCoords(aboutSubtitle)) {
		aboutSubtitle.style.transition = '.2s all';
		aboutSubtitle.classList.remove(subtitleClassActive);
		promoTitle.style.opacity = '1';
		aboutSubtitle.style.opacity = '0';
	}
}

function getTopCoords(elem) {
	let box = elem.getBoundingClientRect();

	return box.top + window.scrollY;
}

/* harmony default export */ __webpack_exports__["default"] = (titleAnim);


/***/ }),

/***/ "./src/js/offsetPortfolioItems.js":
/*!****************************************!*\
  !*** ./src/js/offsetPortfolioItems.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function offsetPortfolioItems(screenWidth, itemsSelector) {
	const maxOffsetWidth = 992,
		offset = 70,
		startOffset = 140;
	if (screenWidth > maxOffsetWidth) {
		const items = document.querySelectorAll(itemsSelector);
		items.forEach((item, i) => {
			item.style.top = `${startOffset + i * offset}px`;
		});
	}
}
/* harmony default export */ __webpack_exports__["default"] = (offsetPortfolioItems);


/***/ }),

/***/ "./src/js/openMenu.js":
/*!****************************!*\
  !*** ./src/js/openMenu.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//Animation of opening menu
function openMenu(hamburger, contentSelector, sidePanelSelector) {
	const content = document.querySelector(contentSelector),
		sidePanel = document.querySelector(sidePanelSelector);

	if (hamburger.classList.contains('hamburger_up')) {
		window.scrollTo(0, 0);
	} else {
		content.classList.toggle(`${contentSelector.replace('.', '')}_folded`);
		sidePanel.classList.toggle(`${sidePanelSelector.replace('.', '')}_hidden`);
		hamburger.classList.toggle('hamburger_close');
	}
}

/* harmony default export */ __webpack_exports__["default"] = (openMenu);


/***/ }),

/***/ "./src/js/sapperSlider.js":
/*!********************************!*\
  !*** ./src/js/sapperSlider.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//Sapper slider
function sapperSlider(photoSelector, radioBtnsSelector) {
	const photoSapper = document.querySelectorAll(photoSelector);
	const radioBtns = document.querySelectorAll(radioBtnsSelector);
	let checkedIndex = 0;
	setMainPhoto(photoSapper, checkedIndex);

	radioBtns.forEach((radioBtn, i) => {
		radioBtn.addEventListener('change', () => {
			checkedIndex = i;
			setMainPhoto(photoSapper, checkedIndex);
		});
	});
}

function setMainPhoto(photos, index) {
	photos.forEach((photo) => {
		photo.classList.remove('active');
	});
	photos[index].classList.add('active');
}

/* harmony default export */ __webpack_exports__["default"] = (sapperSlider);


/***/ }),

/***/ "./src/js/smoothLinks.js":
/*!*******************************!*\
  !*** ./src/js/smoothLinks.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _openMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openMenu.js */ "./src/js/openMenu.js");


function smoothLinks() {
	const smoothLinks = document.querySelectorAll('a[href^="#"]');
	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener('click', function (e) {
			e.preventDefault();
			(0,_openMenu_js__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('.hamburger'), '.content', '.sidepanel');
			setTimeout(() => {
				const id = smoothLink.getAttribute('href');

				document.querySelector(id).scrollIntoView({
					alignToTop: 'true',
					behavior: 'auto',
					block: 'start',
				});
			}, 1000);
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (smoothLinks);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animation_animationScript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation/animationScript.js */ "./src/js/animation/animationScript.js");
/* harmony import */ var _openMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openMenu.js */ "./src/js/openMenu.js");
/* harmony import */ var _animation_firstScreenAnim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation/firstScreenAnim.js */ "./src/js/animation/firstScreenAnim.js");
/* harmony import */ var _sapperSlider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sapperSlider.js */ "./src/js/sapperSlider.js");
/* harmony import */ var _smoothLinks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smoothLinks.js */ "./src/js/smoothLinks.js");
/* harmony import */ var _offsetPortfolioItems_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offsetPortfolioItems.js */ "./src/js/offsetPortfolioItems.js");









const doc = document;

doc.addEventListener('DOMContentLoaded', function () {
	(0,_animation_firstScreenAnim_js__WEBPACK_IMPORTED_MODULE_2__["default"])('.first-screen__top', '.first-screen__bottom', '.first-screen__name', '.first-screen__surname');
	(0,_animation_animationScript_js__WEBPACK_IMPORTED_MODULE_0__.animate)();
	(0,_sapperSlider_js__WEBPACK_IMPORTED_MODULE_3__["default"])('.portfolio__photo-sapper', '.portfolio__checkbox');

	const screenWidth = doc.documentElement.clientWidth;
	(0,_offsetPortfolioItems_js__WEBPACK_IMPORTED_MODULE_5__["default"])(screenWidth, '.portfolio__item');

	const hamburger = doc.querySelector('.hamburger');
	hamburger.addEventListener('click', () => (0,_openMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(hamburger, '.content', '.sidepanel'));

	(0,_smoothLinks_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map