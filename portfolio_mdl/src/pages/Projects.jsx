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
			pro.classList.add('active__opacity');
			perso.classList.remove('active__opacity');
			perso.classList.add('active__title');
			pro.classList.remove('active__title');
		} else if (e.target.id === 'pro') {
			setProjectPro(true);
			setProjectPerso(false);
			pro.classList.remove('anim__right');
			perso.classList.add('active__opacity');
			pro.classList.remove('active__opacity');
			pro.classList.add('active__title');
			perso.classList.remove('active__title');
		}
	};

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: false },
		{ width: 850, itemsToShow: 2, itemsToScroll: 2 },
		{ width: 1150, itemsToShow: 2, itemsToScroll: 2 },
		{ width: 1450, itemsToShow: 2 },
		{ width: 1750, itemsToShow: 3 },
		{ width: 2250, itemsToShow: 4 },
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
			<div className="container">
				<h2 className={inView ? 'reveal' : ''}>
					<Colorbar />
					Réalisations</h2>
				<div className='projects__choise'>
					<p id='perso' className={inView ? 'anim__left' : ''} ref={ref} onClick={handleProject}>
						Personnelles
					</p>
					<p id='pro' className={inView ? 'anim__right' : ''} ref={ref} onClick={handleProject}>
						Formation
					</p>
				</div>
				{projectsToggle()}
			</div>
		</section>
	);
};

export default Projects;
