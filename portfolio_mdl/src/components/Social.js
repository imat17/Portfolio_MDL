import React from 'react';
import Github from '../images/icons/github-white.png';
import Linkedin from '../images/icons/linkedin.png';

const Social = () => {
	return (
		<div className='social'>
			<a href='https://github.com/imat17' target='_blank' rel='noreferrer'>
				<img src={Github} alt='lien github' />
			</a>
			<a
				href='https://www.linkedin.com/in/matisse-davaille-leroy-4101151b1/?originalSubdomain=fr'
				target='_blank'
				rel='noreferrer'
			>
				<img src={Linkedin} alt='lien linkedin' />
			</a>
		</div>
	);
};

export default Social;


{/* <i class="fa-solid fa-angles-left"></i> */}