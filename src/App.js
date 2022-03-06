import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';

import LoginWithPopup from './components/LoginWithPopup';

import PrivateRoute from './PrivateRoute';

function App() {
	return (
		<div className=' w-screen h-screen'>
			<Router>
				<PrivateRoute exact path='/' component={Home} />
				<Route exact path='/login' component={LoginWithPopup} />
			</Router>
		</div>
	);
}

export default App;
