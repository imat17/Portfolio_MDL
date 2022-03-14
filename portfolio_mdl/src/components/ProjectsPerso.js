import React from 'react';
import { PersonnalData } from '../data/PersonnalData';
import Carousel from 'react-elastic-carousel';

const ProjectsPerso = (props) => {
	return (
		<div className='projects'>
			<Carousel itemsToScroll={1} itemsToShow={3} breakPoints={props.breakPoints}>
				{PersonnalData.map((project) => (
					<li key={project.id}>
						<h5>{project.name}</h5>
						<a className='projects__img' href={project.source} target='_blank' rel='noreferrer'>
							<img src={project.picture} alt='Logo projet' />
						</a>
						<p>{project.info}</p>
						<div className='icons'>
							{project.languagesIcons.map((icon) => (
								<img src={icon} alt='icon language' />
							))}
						</div>
						<a href={project.source} target='_blank' rel='noreferrer'>
							Voir le site
						</a>
					</li>
				))}
			</Carousel>
		</div>
	);
};

export default ProjectsPerso;
