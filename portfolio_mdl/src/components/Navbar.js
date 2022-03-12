import React from 'react';
import Logo from '../images/logo_mdl.png';
import List from '../images/icons/bars-solid.svg';

const Header = () => {
	return (
		<nav>
			<a className='link__home' href='#section__one'>
				<img src={Logo} alt='Logo' title='logo mdl' />
			</a>

			<ul>
				<a href='#section__two'>
					<li>COMPETENCES
					<p className="border"></p>
					</li>
					
				</a>
				<a href='#section__three'>
					<li>PROJETS
					<p className="border"></p>
					</li>
					
				</a>
				<a href='mailto:davailleleroy.matisse@gmail.com'>
					<li>CONTACT
					<p className="border"></p>
					</li>
					
				</a>
			</ul>
			<span>
				<img src={List} alt='nav list' />
			</span>
		</nav>
	);
};

export default Header;
