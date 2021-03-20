import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home";
import PrivateRoute from "./PrivateRoute";
import SignUp from "./components/SignUp";
import LoginWithPopup from "./components/LoginWithPopup";

function App() {
	return (
		<Router>
			<div className="theme-dark flex justify-center">
				<PrivateRoute exact path="/" component={Home} />
				<Route exact path="/login" component={LoginWithPopup} />
				<Route exact path="/signup" component={SignUp} />
			</div>
		</Router>
	);
}

export default App;
