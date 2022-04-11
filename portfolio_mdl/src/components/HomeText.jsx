import React from 'react';
import M from '../images/icons/letter-m.png';
import Colorbar from './Colorbar';

const HomeText = () => {
	return (
		<>
			<div className='container__text'>
				<div className='typewriter__container'>
					<div className='typewriter'>
						<Colorbar />
						<h2>Bienvenue sur<br/>mon portfolio !</h2>
					</div>
				</div>
				<p>Je suis Matisse Davaille-Leroy, développeur web.</p>
				<p>
					Sur ce site, vous pouvez voir mes compétences et mes projets personnels / de formation.<br/>
					N'hésitez pas à télécharger mon CV et à me contacter.
				</p>
			</div>
			<div className='letter'>
				<img src={M} alt='logo' />
			</div>
		</>
	);
};

export default HomeText;
