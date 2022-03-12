import React from 'react';
import ProgressBar from './ProgressBar';
import OtherSkills from './Otherskills';
import ReactLogo from '../images/icons/react.png';
import Js from '../images/icons/js.png';
import Nodejs from '../images/icons/nodejs.png';
import Sass from '../images/icons/sass.png';
import Database from '../images/icons/mongodb-vs-mysql.png';

const SkillsList = () => {
	let skills = [
		{ id: 1, value: 'Javascript', img: { Js }, xp: 0.9 },
		{ id: 2, value: 'React', img: { ReactLogo }, xp: 0.5 },
		{ id: 3, value: 'Css/Sass', img: { Sass }, xp: 1 },
		{ id: 4, value: 'Node.js', img: { Nodejs }, xp: 0.8 },
		// { id: 5, value: 'MongoDB/MySQL', img: { Database }, xp: 0.5 },
	];

	return (
		<div className='skills__grid'>
			<ProgressBar skills={skills} />
			<OtherSkills />
		</div>
	);
};

export default SkillsList;
