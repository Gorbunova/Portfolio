// Module with functions wich offset skills section horizontally
import setProgressNums from './progressBars';
import { setSteppedAnimation } from './animationFunctions';

function offsetSkillsSection(isOpenedSkills, wrapperSelector, visibleSelector, skillsTitleSelector, skillsItemSelectors) {
	const { technologies, instruments, knowledge } = skillsItemSelectors;
	const doc = document;
	const maxOffsetWidth = 768;
	const skillsWrapper = doc.querySelector(wrapperSelector),
		skillsVisible = doc.querySelector(visibleSelector),
		screenWidth = window.screen.width;

	if (screenWidth <= maxOffsetWidth) {
		return;
	}

	skillsWrapper.style.transform = `translateX(-${skillsVisible.offsetTop}px)`;
	const part = Math.round(skillsVisible.offsetTop / screenWidth);
	setSkillsParts(part, skillsTitleSelector);

	if (skillsVisible.offsetTop > 0 && part === 0 && isOpenedSkills.tec === false) {
		setProgressNums(technologies);
		isOpenedSkills.tec = true;
	} else if (part === 1 && isOpenedSkills.instr === false) {
		setProgressNums(instruments);
		isOpenedSkills.instr = true;
	} else if (part === 2 && isOpenedSkills.knol === false) {
		const skillsKnols = doc.querySelectorAll(knowledge);
		setSteppedAnimation(true, 0, skillsKnols, false);
		isOpenedSkills.knol = true;
	}

	return isOpenedSkills;
}
// Animation change active part of skills section
function setSkillsParts(index, skillsTitleSelector) {
	const skillsParts = document.querySelectorAll(skillsTitleSelector),
		activeClass = `${skillsTitleSelector.replace('.', '')}_active`;
	removeSkillsParts(skillsTitleSelector, activeClass);
	skillsParts[index].classList.add(activeClass);
}

function removeSkillsParts(skillsTitleSelector, activeClass) {
	const skillsParts = document.querySelectorAll(skillsTitleSelector);
	skillsParts.forEach((part) => {
		part.classList.remove(activeClass);
	});
}

export default offsetSkillsSection;
