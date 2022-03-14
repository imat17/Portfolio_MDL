import React, { useState } from 'react';
import ProjectsPerso from '../components/ProjectsPerso';
import ProjectsPro from '../components/ProjectsPro';

const Projects = () => {
	const [toggle, setToggle] = useState(false);

	const projectsToggle = () => {
		if (toggle === false) {
			return <ProjectsPro />;
		} else if (toggle === true) {
			return <ProjectsPerso />;
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
