import React, { useState } from 'react';
import Logo from '../images/logo_mdl.png';
import List from '../images/icons/bars-solid.svg';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const bars = document.querySelector('.nav__responsive');

	const handleNav = () => {
		if (toggle === false) {
			return;
		} else if (toggle === true) {
			return (
				<>
					<div className='navbar__mobile'>
						<ul>
							<a href='#section__two'>
								<li>
									COMPETENCES
									<p className='border'></p>
								</li>
							</a>
							<a href='#section__three'>
								<li>
									PROJETS
									<p className='border'></p>
								</li>
							</a>
							<a href='mailto:davailleleroy.matisse@gmail.com'>
								<li>
									CONTACT
									<p className='border'></p>
								</li>
							</a>
							<div>
								<li>
									CV
									<p className='border'></p>
								</li>
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
						PROJETS
						<p className='border'></p>
					</li>
				</a>
				<a href='mailto:davailleleroy.matisse@gmail.com'>
					<li>
						CONTACT
						<p className='border'></p>
					</li>
				</a>
				<div>
					<li>
						CV
						<p className='border'></p>
					</li>
				</div>
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
