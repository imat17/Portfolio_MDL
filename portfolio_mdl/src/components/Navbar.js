import React, { useState } from 'react';
import Logo from '../images/logo_mdl.png';
import List from '../images/icons/bars-solid.svg';
import CV from '../images/cv-matisse-2022.pdf';

const Header = ({ modalToggle, setModalToggle }) => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
		setModalToggle(!modalToggle);
	};

	const handleNav = () => {
		if (toggle === false) {
			return;
		} else if (toggle === true) {
			return (
				<>
					<div className='navbar__mobile'>
						<ul className='ul__mobile'>
							<a href='#section__two' className='anim-1'>
								<li onClick={(e) => setToggle(!toggle)}>COMPETENCES</li>
							</a>
							<a href='#section__three' className='anim-2'>
								<li onClick={(e) => setToggle(!toggle)}>PROJETS</li>
							</a>
							<li onClick={handleToggle}>CONTACT</li>
							<div className='anim-4'>
								<li onClick={(e) => setToggle(!toggle)}>CV</li>
							</div>
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
						COMPETENCES
						<p className='border'></p>
					</li>
				</a>
				<a href='#section__three'>
					<li>
						REALISATIONS
						<p className='border'></p>
					</li>
				</a>

				<li onClick={(e) => setModalToggle(!modalToggle)}>
					CONTACT
					<p className='border'></p>
				</li>

				<a href={CV} download>
					<li>
						CV
						<p className='border'></p>
					</li>
				</a>
			</ul>
			<span>
				<img src={List} alt='nav list' />
			</span>
			<div className='nav__responsive' onClick={() => setToggle(!toggle)}>
				<i className='fa-solid fa-bars fa-2xl'></i>
			</div>
			{handleNav()}
		</nav>
	);
};

export default Header;
