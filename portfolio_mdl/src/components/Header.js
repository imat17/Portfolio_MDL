import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo_mdl.png';
import List from '../images/icons/bars-solid.svg';

const Header = () => {
	return (
		<header>
			<NavLink to='/'>
				<div>
					<img src={Logo} alt='Logo' title='logo mdl' />
				</div>
			</NavLink>
			<ul>
				<NavLink to='/skills'>
					<li>COMPETENCES</li>
				</NavLink>
				<NavLink to='/projects'>
					<li>PROJETS</li>
				</NavLink>
				<a href='mailto:davailleleroy.matisse@gmail.com'>
					<li>CONTACT</li>
				</a>
			</ul>
			<span>
				<img src={List} alt='nav list' />
			</span>
		</header>
	);
};

export default Header;
