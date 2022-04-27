import React, { useState, useEffect } from 'react';
import Logo from '../images/logo_mdl.png';
import List from '../images/icons/bars-solid.svg';
import Cross from '../images/icons/close.svg';
import CV from '../images/CV-MATISSE.pdf';

const NavDesk = () => {
	return (
		<nav className='nav__big'>
			<a className='link__home' href='#section__one'>
				<img src={Logo} alt='Logo' title='logo mdl' />
			</a>
			<ul>
				<a href='#section__two'>
					<li>
						A PROPOS
						<p className='border'></p>
					</li>
				</a>
				<a href='#section__three'>
					<li>
						REALISATIONS
						<p className='border'></p>
					</li>
				</a>
				<a href='#section__four'>
					<li>
						CONTACT
						<p className='border'></p>
					</li>
				</a>
				<a href={CV} download>
					<li>
						CV
						<p className='border'></p>
					</li>
				</a>
			</ul>
		</nav>
	)
}

const NavMob = ({ toggle, setToggle }) => {
	return (
		<nav className='nav__small' style={{ backgroundColor: !toggle ? 'rgba(0, 0, 0, 0.85)' : '' }}>
			<div className="nav__responsive">
				<img src={toggle ? List : Cross} alt="list icon" onClick={() => setToggle(!toggle)} />
				{!toggle && (
					<div className='navbar__mobile'>
						<ul className='ul__mobile'>
							<a href='#section__two' className='anim-1'>
								<li onClick={() => setToggle(!toggle)}>A PROPOS</li>
							</a>
							<a href='#section__three' className='anim-2'>
								<li onClick={() => setToggle(!toggle)}>PROJETS</li>
							</a>
							<a href='#section__four' className='anim-3'>
								<li onClick={() => setToggle(!toggle)}>CONTACT</li>
							</a>
							<a href={CV} download className='anim-4'>
								<li onClick={() => setToggle(!toggle)}>CV</li>
							</a>
						</ul>
					</div>
				)}
			</div>
		</nav>
	)
}

const Header = () => {
	const [toggle, setToggle] = useState(false);

	const [screenSize, setScreenSize] = useState(undefined);

	useEffect(() => {

		const handleResize = () => setScreenSize(window.innerWidth);
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	});

	if (screenSize > 614) {
		return (
			<NavDesk />
		)
	} else {
		return (
			<NavMob toggle={toggle} setToggle={setToggle} />
		)
	}
};

export default Header;
