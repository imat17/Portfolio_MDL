import React from 'react';
import { useInView } from 'react-intersection-observer';
import SkillsList from '../components/SkillsList';

const Skills = () => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<section id='section__two'>
			<h2 ref={ref} className={inView ? 'reveal' : ''}>
				Mes compétences
			</h2>
			<SkillsList />
		</section>
	);
};

export default Skills;
