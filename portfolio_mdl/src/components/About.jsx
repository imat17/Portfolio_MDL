import React from 'react';
import Colorbar from './Colorbar';

const About = () => {
	return (
		<>
			<div className='about'>
				<div className='about__text'>
					<h2>
						<Colorbar />
						Evolution
					</h2>
					<p>
						Ma curiosité et ma passion pour le développement me pousse à me perfectionner
						<br />
						sur certaines technologies mais également à augmenter mon panel de compétences.
					</p>
				</div>
				<ul className='about__list'>
					<li>
						<h5>Auto-formation</h5>
						<p>
							Apprentissage des bases du
							<br />
							développement web
						</p>
					</li>
					<li>
						<h5>Formation diplômante</h5>
						<p>
							Perfectionnement lors d'une
							<br />
							formation diplômante
						</p>
					</li>
					<li>
						<h5>Entraînement personnel</h5>
						<p>
							Projets personnels
						</p>
					</li>
				</ul>
			</div>
		</>
	);
};

export default About;
