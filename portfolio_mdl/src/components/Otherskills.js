import React from 'react';
import { useInView } from 'react-intersection-observer';

const Otherskills = () => {
	const { ref, inView } = useInView({ triggerOnce: true });

	const skill = {
		first: [
			{ id: 1, value: 'GITHUB', xp: 80 },
			{ id: 2, value: 'MONGODB', xp: 75 },
			{ id: 3, value: 'SQL', xp: 60 },
		],
		second: [
			{ id: 4, value: 'BOOTSTRAP', xp: 70 },
			{ id: 5, value: 'SEO', xp: 60 },
			{ id: 6, value: 'ANGLAIS', xp: 100 },
		],
	};

	return (
		<div className='others__skills'>
			<h3>Autres compétences</h3>
			<div className='others__list'>
				<ul>
					{skill.first.map((skill) => (
						<li key={skill.id}>
							<div
								className='ko-progress-circle'
								data-progress={inView ? `${skill.xp}` : ''}
								ref={ref}
							>
								<div className='ko-circle'>
									<div className='full ko-progress-circle__slice'>
										<div className='ko-progress-circle__fill'></div>
									</div>
									<div className='ko-progress-circle__slice'>
										<div className='ko-progress-circle__fill'></div>
										<div className='ko-progress-circle__fill ko-progress-circle__bar'></div>
									</div>
								</div>
								<div className='ko-progress-circle__overlay'></div>
							</div>
							<p>{skill.value}</p>
						</li>
					))}
				</ul>
				<ul>
					{skill.second.map((skill) => (
						<li key={skill.id}>
							<div
								className='ko-progress-circle'
								data-progress={inView ? `${skill.xp}` : ''}
								ref={ref}
							>
								<div className='ko-circle'>
									<div className='full ko-progress-circle__slice'>
										<div className='ko-progress-circle__fill'></div>
									</div>
									<div className='ko-progress-circle__slice'>
										<div className='ko-progress-circle__fill'></div>
										<div className='ko-progress-circle__fill ko-progress-circle__bar'></div>
									</div>
								</div>
								<div className='ko-progress-circle__overlay'></div>
							</div>
							<p>{skill.value}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Otherskills;
