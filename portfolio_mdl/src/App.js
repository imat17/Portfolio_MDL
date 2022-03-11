import React from 'react';
// import Routes from './components/Routes';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

const App = () => {
	return (
		<>
			<Navbar />
			<div className='container__global'>
				<Home />
				<Skills />
				<Projects />
			</div>
		</>
	);
};

export default App;
