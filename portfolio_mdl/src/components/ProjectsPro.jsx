import React from 'react';
import { FormationData } from '../data/FormationData';

const ProjectsPro = () => {
	return (
		<div className="grid">
			{FormationData.map((project) => (
				<div className="project__container">
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
							Voir sur Github
						</a>
					</li>
				</div>
			))}
		</div>
	);
};

export default ProjectsPro;

