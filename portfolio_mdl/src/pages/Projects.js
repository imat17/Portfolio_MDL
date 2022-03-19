import React, { useState, useRef, useCallback } from 'react';
import ProjectsPerso from '../components/ProjectsPerso';
import ProjectsPro from '../components/ProjectsPro';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
	const ref = useRef();
	const [inViewRef, inView] = useInView({triggerOnce: true});

	const setRefs = useCallback(
		(node) => {
			ref.current = node;

			inViewRef(node);
		},
		[inViewRef]
	);

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
		<section id='section__three' ref={setRefs}>
			<h2 className={inView ? 'reveal' : ''}>Mes réalisations</h2>
			<div className='projects__choise'>
				<p id='pro' className={inView ? 'anim__left' : ''} ref={ref} onClick={handleProject}>
					Formation
				</p>
				<p id='perso' className={inView ? 'anim__right' : ''} ref={ref} onClick={handleProject}>
					Personnels
				</p>
			</div>
			{projectsToggle()}
		</section>
	);
};

export default Projects;
