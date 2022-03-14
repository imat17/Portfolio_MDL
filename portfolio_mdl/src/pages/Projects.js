import React, { useState } from 'react';
import ProjectsPerso from '../components/ProjectsPerso';
import ProjectsPro from '../components/ProjectsPro';

const Projects = () => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: false },
		{ width: 850, itemsToShow: 1 },
		{ width: 1150, itemsToShow: 2, itemsToScroll: 1 },
		{ width: 1450, itemsToShow: 2 },
		{ width: 1750, itemsToShow: 3 },
	];

	const [toggle, setToggle] = useState(false);

	const projectsToggle = () => {
		if (toggle === false) {
			return <ProjectsPro breakPoints={breakPoints} />;
		} else if (toggle === true) {
			return <ProjectsPerso breakPoints={breakPoints} />;
		}
	};

	return (
		<section id='section__three'>
			<h3>Mes projets</h3>
			<div className='projects__choise'>
				<p onClick={() => setToggle(!toggle)}>Projets de formation</p>
				<p onClick={() => setToggle(!toggle)}>Projets personnels</p>
			</div>
			{projectsToggle()}
		</section>
	);
};

export default Projects;
