import React from 'react';
import Social from './components/Social';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
	
	return (
		<>
			<Navbar/>
			<main>
				<Social />
				<div className='container__global'>
					<Home />
					<Skills />
					<Projects />
					<Contact />
				</div>
			</main>
		</>
	);
};

export default App;
