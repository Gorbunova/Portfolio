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
export default firstScreenAnim;
