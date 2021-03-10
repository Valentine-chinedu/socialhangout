import React from "react";
import Posts from "../posts/Posts";
import Profile from "../profile/Profile";

const Home = () => {
	return (
		<div className="h-full lg:border-r lg:border-l lg:w-full lg:flex">
			<Posts />
			<Profile />
		</div>
	);
};

export default Home;
