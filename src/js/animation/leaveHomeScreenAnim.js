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
export default leaveHomeScreen;
