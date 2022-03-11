import React from 'react';

const HomeText = () => {
	return (
		<div className='container__text'>
			<div className='typewriter__container'>
				<div className='typewriter'>
					<p>Bonjour et bienvenue sur mon portfolio !</p>
				</div>
			</div>
			<p>Je suis Matisse Davaille-Leroy, développeur React.</p>
			<p>
				Sur ce site, vous pouvez voir mes compétences et mes projets personnels / de formation.
				N'hésitez pas à télécharger mon CV et à me contacter.
			</p>
		</div>
	);
};

export default HomeText;
