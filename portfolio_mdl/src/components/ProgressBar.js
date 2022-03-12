import React from 'react';

const ProgressBar = (props) => {
	console.log(props);
	return (
		<div className='languages'>
			<h3>Languages</h3>
			<div className='years'>
				<span>Années d'expérience</span>
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
							<div className='progressBar' style={{ width: progressBar }}></div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProgressBar;
