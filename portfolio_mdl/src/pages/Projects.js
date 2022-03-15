import React, { useState } from 'react';
import ProjectsPerso from '../components/ProjectsPerso';
import ProjectsPro from '../components/ProjectsPro';

const Projects = () => {
	const [projectPro, setProjectPro] = useState(true);
	const [projectPerso, setProjectPerso] = useState(false);

	const pro = document.querySelector('#pro');
	const perso = document.querySelector('#perso');

	const handleProject = (e) => {
		if (e.target.id === 'pro') {
			setProjectPerso(false);
			setProjectPro(true);
			pro.classList.add('active');
			perso.classList.remove('active');
		} else if (e.target.id === 'perso') {
			setProjectPerso(true);
			setProjectPro(false);
			perso.classList.add('active');
			pro.classList.remove('active');
		}
	};

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: false },
		{ width: 850, itemsToShow: 1 },
		{ width: 1150, itemsToShow: 2, itemsToScroll: 1 },
		{ width: 1450, itemsToShow: 2 },
		{ width: 1750, itemsToShow: 3 },
	];

	const projectsToggle = () => {
		if (projectPro === true) {
			return <ProjectsPro breakPoints={breakPoints} />;
		} else if (projectPerso === true) {
			return <ProjectsPerso breakPoints={breakPoints} />;
		}
	};

	return (
		<section id='section__three'>
			<h3>Mes projets</h3>
			<div className='projects__choise'>
				<p id='pro' onClick={handleProject}>
					Projets de formation
				</p>
				<p id='perso' onClick={handleProject}>
					Projets personnels
				</p>
			</div>
			{projectsToggle()}
		</section>
	);
};

export default Projects;
