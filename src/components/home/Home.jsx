import React from "react";
import Posts from "../posts/Posts";
import Profile from "../profile/Profile";
import SubmitForm from "../form/SubmitForm";

const Home = () => {
	return (
		<div className="relative h-full lg:border-r lg:border-l lg:w-full lg:flex">
			<Posts />
			<Profile />
			<SubmitForm />
		</div>
	);
};

export default Home;
