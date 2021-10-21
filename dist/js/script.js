'use strict';

import { animate } from './animationScript.js';

const doc = document;

const hamburger = doc.querySelector('.hamburger');

doc.addEventListener('DOMContentLoaded', function () {
	animate();

	hamburger.addEventListener('click', openMenu);
});

function openMenu() {
	const content = doc.querySelector('.content'),
		sidePanel = doc.querySelector('.sidepanel');

	if (hamburger.classList.contains('hamburger_up')) {
		window.scrollTo(0, 0);
	} else {
		content.classList.toggle('content_folded');
		sidePanel.classList.toggle('sidepanel_hidden');
		hamburger.classList.toggle('hamburger_close');
	}
}
