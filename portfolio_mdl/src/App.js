import React, { useState } from 'react';
import Social from './components/Social';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './components/Contact';

const App = () => {
	const [modalToggle, setModalToggle] = useState(false);

	const displayModal = () => {
		if (modalToggle === true) {
			document.body.classList.add('active-modal');
			return <Contact modalToggle={modalToggle} setModalToggle={setModalToggle} />;
		} else if (modalToggle === false) {
			document.body.classList.remove('active-modal');
			return;
		}
	};
	return (
		<>
			<Navbar modalToggle={modalToggle} setModalToggle={setModalToggle} />
			{displayModal()}
			<Social />
			<div className='container__global'>
				<Home />
				<Skills />
				<Projects />
			</div>
		</>
	);
};

export default App;
