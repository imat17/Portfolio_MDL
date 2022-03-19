import React from 'react';
import { useInView } from 'react-intersection-observer';

const ProgressBar = (props) => {
	const { ref, inView } = useInView({ threshold: 0.7, triggerOnce: true });
	return (
		<div className='languages'>
			<h3>Langages</h3>
			<div className='years'>
				<span>Annees d'experience</span>
				<span>6 mois</span>
				<span>1 an</span>
			</div>

			<div>
				{props.skills.map((item) => {
					let xpYears = 1;
					let progressBar = (item.xp / xpYears) * 100 + '%';

					return (
						<div key={item.id} className='languagesList'>
							<li>{item.value}</li>
							<div
								className={inView ? 'progressBar' : ''}
								style={{ width: progressBar }}
								ref={ref}
							></div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProgressBar;
