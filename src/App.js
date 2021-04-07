import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import PrivateRoute from "./PrivateRoute";

import LoginWithPopup from "./components/LoginWithPopup";

function App() {
	return (
		<Router>
			<div className="relative flex justify-center md:w-screen">
				<PrivateRoute exact path="/" component={Layout} />
				<Route exact path="/login" component={LoginWithPopup} />
			</div>
		</Router>
	);
}

export default App;
