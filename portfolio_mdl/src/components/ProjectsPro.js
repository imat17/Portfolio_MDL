import React from 'react';
import { FormationData } from '../data/FormationData';
import Carousel from 'react-elastic-carousel';

const ProjectsPro = () => {
	console.log(FormationData);

	return (
		<div className='projects'>
			<Carousel itemsToScroll={1} itemsToShow={3}>
				{FormationData.map((project) => (
					<li key={project.id}>
						<h5>{project.name}</h5>
						<div className='projects__img'>
							<img src={project.picture} alt='Logo projet' />
						</div>
						<p>{project.info}</p>
						<div className='icons'>
							{project.languagesIcons.map((icon) => (
								<i className={icon} key={icon}></i>
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
