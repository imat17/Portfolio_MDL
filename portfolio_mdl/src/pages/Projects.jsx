import React, { useState, useRef, useCallback } from 'react';
import ProjectsPerso from '../components/ProjectsPerso';
import ProjectsPro from '../components/ProjectsPro';
import Colorbar from '../components/Colorbar';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
	const ref = useRef();
	const [inViewRef, inView] = useInView();

	const setRefs = useCallback(
		(node) => {
			ref.current = node;

			inViewRef(node);
		},
		[inViewRef]
	);

	const [projectPro, setProjectPro] = useState(false);
	const [projectPerso, setProjectPerso] = useState(true);

	const pro = document.querySelector('#pro');
	const perso = document.querySelector('#perso');

	const handleProject = (e) => {
		if (e.target.id === 'perso') {
			setProjectPerso(true);
			setProjectPro(false);
			perso.classList.remove('anim__left');
			pro.classList.add('choise__opacity');
			perso.classList.remove('choise__opacity');
			perso.classList.add('choise__title');
			pro.classList.remove('choise__title');
		} else if (e.target.id === 'pro') {
			setProjectPro(true);
			setProjectPerso(false);
			pro.classList.remove('anim__right');
			perso.classList.add('choise__opacity');
			pro.classList.remove('choise__opacity');
			pro.classList.add('choise__title');
			perso.classList.remove('choise__title');
		}
	};

	const projectsToggle = () => {
		if (projectPro) {
			return <ProjectsPro />;
		} else if (projectPerso) {
			return <ProjectsPerso />;
		}
	};

	return (
		<section id='section__three' ref={setRefs}>
			<div className="container">
				<h2 className={inView ? 'reveal' : ''}>
					<Colorbar />
					Réalisations</h2>
				<div className='projects__choise'>
					<p id='perso' className={`choise__title ${inView ? 'anim__left' : ''}`} ref={ref} onClick={handleProject}>
						Personnelles
					</p>
					<p id='pro' className={`choise__opacity ${inView ? 'anim__right' : ''}`} ref={ref} onClick={handleProject}>
						Formation
					</p>
				</div>
				{projectsToggle()}
			</div>
		</section>
	);
};

export default Projects;

