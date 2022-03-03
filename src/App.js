import React, { useContext } from 'react';

import Layout from './components/layout/Layout';
import PrivateRoute from './PrivateRoute';

import LoginWithPopup from './components/LoginWithPopup';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<div className='flex'>
			<Router>
				<div className='relative flex justify-center md:w-screen'>
					<PrivateRoute exact path='/' component={Layout} />
					<Route exact path='/login' component={LoginWithPopup} />
				</div>
			</Router>
		</div>
	);
}

export default App;
