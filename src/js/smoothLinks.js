import openMenu from './openMenu.js';

function smoothLinks() {
	const smoothLinks = document.querySelectorAll('a[href^="#"]');
	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener('click', function (e) {
			e.preventDefault();
			openMenu(document.querySelector('.hamburger'), '.content', '.sidepanel');
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

export default smoothLinks;
