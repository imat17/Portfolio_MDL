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
			return <Contact modalToggle={modalToggle} setModalToggle={setModalToggle} />;
		} else {
			return;
		}
	};
	return (
		<>
			<Navbar modalToggle={modalToggle} setModalToggle={setModalToggle} />
			<main>
				{displayModal()}
				<Social />
				<div className='container__global'>
					<Home />
					<Skills />
					<Projects />
				</div>
			</main>
		</>
	);
};

export default App;
