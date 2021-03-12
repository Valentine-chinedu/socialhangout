import React from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<div className="theme-dark flex justify-around">
			<Navbar />
			<Home />
		</div>
	);
}

export default App;
