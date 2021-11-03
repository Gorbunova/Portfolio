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
export default offsetPortfolioItems;
