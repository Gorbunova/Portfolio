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

export default openMenu;
