import React from 'react';
import ScrollB from '../images/icons/scroll_bottom.png';

const HomeText = () => {
	return (
		<>
			<div className='container__text'>
				<div className='typewriter__container'>
					<div className='typewriter'>
						<p>Je suis développeur web.</p>
					</div>
				</div>
				<p>Sed si ille hac tam eximia fortuna propter utilitatem rei</p>
				<p>
					Sed si ille hac tam eximia fortuna propter utilitatem rei publicae frui non properat, ut
					omnia illa conficiat, quid ego, senator, facere debeo, quem, etiamsi ille aliud vellet,
					rei publicae consulere oporteret?
				</p>
			</div>
			<div className='scroll__bottom'>
				<img src={ScrollB} alt='scroll bottom' />
			</div>
		</>
	);
};

export default HomeText;
