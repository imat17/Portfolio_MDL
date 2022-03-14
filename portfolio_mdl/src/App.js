import React from 'react';
import Social from './components/Social';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

const App = () => {
	return (
		<>
			<Navbar />
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
