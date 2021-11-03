import { isFullyVisible, setSteppedAnimation, setAnimation } from './animationFunctions';

const educationSectionAnim = (lineSelector, columnTitlesSelector, columnSelector, itemsSelector) => {
	const doc = document;
	const line = doc.querySelector(lineSelector),
		columnTitles = doc.querySelectorAll(columnTitlesSelector),
		column = doc.querySelectorAll(columnSelector),
		item = doc.querySelectorAll(itemsSelector);

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
};
export default educationSectionAnim;
