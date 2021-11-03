import { isPartiallyVisible, setSteppedAnimation } from './animationFunctions';
import setProgressNums from './progressBars';

function skillsSectionAnim(isOpenedSkills, skillsItemSelectors, technologiesSelector, instrumentsSelector) {
	const doc = document;
	const { technologies, instruments, knowledge } = skillsItemSelectors;

	const skillsTec = doc.querySelector(technologiesSelector);
	const skillsInstr = doc.querySelector(instrumentsSelector);

	const skillsKnolsItems = doc.querySelectorAll(knowledge);

	if (isPartiallyVisible(skillsTec) && isOpenedSkills.tec === false) {
		setProgressNums(technologies);
		isOpenedSkills.tec = true;
	} else if (isPartiallyVisible(skillsInstr) && isOpenedSkills.instr === false) {
		setProgressNums(instruments);
		isOpenedSkills.instr = true;
	} else if (isPartiallyVisible(skillsKnolsItems[0]) && isOpenedSkills.knol === false) {
		setSteppedAnimation(true, 0, skillsKnolsItems, false);
		isOpenedSkills.knol = true;
	}
	return isOpenedSkills;
}

export default skillsSectionAnim;
