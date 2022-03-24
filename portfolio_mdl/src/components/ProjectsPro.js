import React from 'react';
import { FormationData } from '../data/FormationData';
import Carousel from 'react-elastic-carousel';
import { useInView } from 'react-intersection-observer';

const ProjectsPro = (props) => {
	const { ref, inView } = useInView(1);

	return (
		<div className={`projects ${inView ? 'project-anim' : ''}`} ref={ref}>
			<Carousel itemsToScroll={1} itemsToShow={3} breakPoints={props.breakPoints}>
				{FormationData.map((project) => (
					<li key={project.id}>
						<h5>{project.name}</h5>
						<a className='projects__img' href={project.source} target='_blank' rel='noreferrer'>
							<img src={project.picture} alt='Logo projet' />
						</a>
						<p>{project.info}</p>
						<div className='icons'>
							{project.languagesIcons.map((icon) => (
								<img src={icon} alt='Icon Language' />
							))}
						</div>
						<a href={project.source} target='_blank' rel='noreferrer'>
							Voir sur Github
						</a>
					</li>
				))}
			</Carousel>
		</div>
	);
};

export default ProjectsPro;
