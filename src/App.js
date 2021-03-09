import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";

function App() {
	return (
		<div className="theme-dark flex justify-around">
			<Navbar />
			<Home />
			<Profile />
		</div>
	);
}

export default App;
