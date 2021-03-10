import React from "react";

import Home from "./home/Home";
import Navbar from "./navbar/Navbar";

function App() {
	return (
		<div className="theme-dark flex justify-around">
			<Navbar />
			<Home />
		</div>
	);
}

export default App;
