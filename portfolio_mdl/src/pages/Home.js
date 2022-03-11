import React from 'react';

import HomeText from '../components/HomeText';
import ScrollB from '../images/icons/scroll_bottom.png';

const Home = () => {
	return (
		<section id='section__one'>
			<HomeText />
			<a className='scroll__bottom' href='#section__two'>
				<img src={ScrollB} alt='' />
			</a>
		</section>
	);
};

export default Home;
