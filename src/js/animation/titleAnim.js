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

export default titleAnim;
