import React from 'react';
import { useInView } from 'react-intersection-observer';
import SkillsList from '../components/SkillsList';
import ScrollDown from '../components/ScrollDown';

const Skills = () => {
	const { ref, inView } = useInView();
	
	return (
		<section id='section__two'>
			<h3 ref={ref} className={inView ? 'reveal' : ''}>
				Mes compétences
			</h3>
			<SkillsList />
			<ScrollDown />
		</section>
	);
};

export default Skills;
