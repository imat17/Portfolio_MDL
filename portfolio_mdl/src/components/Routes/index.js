import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Skills from '../../pages/Skills';
import Projects from '../../pages/Projects';

const index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/skills' element={<Skills />} />
				<Route path='projects' element={<Projects />} />
			</Routes>
		</BrowserRouter>
	);
};

export default index;
