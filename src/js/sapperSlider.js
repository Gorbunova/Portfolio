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

export default sapperSlider;
