import React, { useState } from 'react';
import Logo from '../images/logo_mdl.png';
import List from '../images/icons/bars-solid.svg';
import CV from '../images/CV-MATISSE.pdf';

const Header = () => {
	const [toggle, setToggle] = useState(false);

	const handleNav = () => {
		if (toggle === false) {
			return;
		} else if (toggle === true) {
			return (
				<>
					<div className='navbar__mobile'>
						<ul className='ul__mobile'>
							<a href='#section__two' className='anim-1'>
								<li onClick={(e) => setToggle(!toggle)}>A PROPOS</li>
							</a>
							<a href='#section__three' className='anim-2'>
								<li onClick={(e) => setToggle(!toggle)}>PROJETS</li>
							</a>
							<a href='#section__four' className='anim-3'>
								<li onClick={(e) => setToggle(!toggle)}>CONTACT</li>
							</a>
							<a href={CV} download className='anim-4'>
								<li onClick={(e) => setToggle(!toggle)}>CV</li>
							</a>
						</ul>
					</div>
				</>
			);
		}
	};

	return (
		<nav>
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
			<div className='nav__responsive' onClick={() => setToggle(!toggle)}>
				<img src={List} alt='Navigation mobile' />
			</div>
			{handleNav()}
		</nav>
	);
};

export default Header;
