import React from 'react';
import { useInView } from 'react-intersection-observer';
import Technologies from '../components/Technologies';
import About from '../components/About';

const Skills = () => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<section id='section__two'>
			<Technologies />
			<About />
		</section>
	);
};

export default Skills;
