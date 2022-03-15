import React from 'react';
import { useInView } from 'react-intersection-observer';

const Otherskills = () => {

	const { ref, inView } = useInView();

	return (
		<div className={`others__skills ${inView ? 'reveal__others' : ''}`} ref={ref}>
			<h3>Autres compétences</h3>
			<div className='others__list'>
				<ul>
					<li>
						<i className='fa-solid fa-circle-check'>Github</i>
					</li>
					<li>
						<i className='fa-solid fa-circle-check'>MongoDB</i>
					</li>
					<li>
						<i className='fa-solid fa-circle-check'>SQL</i>
					</li>
				</ul>
				<ul>
					<li>
						<i className='fa-solid fa-circle-check'>Bootstrap</i>
					</li>
					<li>
						<i className='fa-solid fa-circle-check'>SEO</i>
					</li>
					<li>
						<i className='fa-solid fa-circle-check'>Anglais courant</i>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Otherskills;
