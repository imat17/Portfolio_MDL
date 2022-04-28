import React from 'react';
import { PersonnalData } from '../data/PersonnalData';

const ProjectsPerso = () => {
    return (
        <div className="grid">
            {PersonnalData.map((project) => (
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
                            Voir le site
                        </a>
                    </li>
                </div>
            ))}
        </div>
    );
};

export default ProjectsPerso;
