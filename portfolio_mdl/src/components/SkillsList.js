import React from 'react';
import ProgressBar from './ProgressBar';
import OtherSkills from './OtherSkills';

const SkillsList = () => {

	let skills = [
		{ id: 1, value: 'Javascript', xp: 0.85 },
		{ id: 2, value: 'React', xp: 0.45 },
		{ id: 3, value: 'Css/Sass', xp: 0.95 },
		{ id: 4, value: 'Node.js', xp: 0.7 },
	];

	return (
		<div className='skills__grid'>
			<ProgressBar skills={skills} />
			<OtherSkills />
		</div>
	);
};

export default SkillsList;
