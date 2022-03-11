import React from 'react';
import ReactLogo from '../images/icons/react.png';
import Nodejs from '../images/icons/nodejs.png';
import Sass from '../images/icons/sass.png';

const SkillsList = () => {
	return (
		<div className='skills__grid'>
			<div className='skill'>
				<div className='img__container'>
					<img src={ReactLogo} alt='' />
				</div>
			</div>
			<div className='skill'>
				<div className='img__container'>
					<img src={Sass} alt='' />
				</div>
			</div>
			<div className='skill'>
				<div className='img__container'>
					<img src={Nodejs} alt='' />
				</div>
			</div>
		</div>
	);
};

export default SkillsList;
