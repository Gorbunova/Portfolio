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
export default setProgressNums;
