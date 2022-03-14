import React from 'react';
import SkillsList from '../components/SkillsList';
import ScrollDown from '../components/ScrollDown';

const Skills = () => {
	return (
		<section id='section__two'>
			<h3>Mes compétences</h3>
			<SkillsList />
			<ScrollDown />
		</section>
	);
};

export default Skills;
