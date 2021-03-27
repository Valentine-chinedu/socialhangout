import React from "react";
import Posts from "../posts/Posts";
import SubmitForm from "../form/SubmitForm";
import Profile from "../profile/Profile";
import Navbar from "../navbar/Navbar";
import NavbarTop from "../navbar/NavbarTop";

const Home = () => {
	return (
		<div className=" theme-dark relative overflow-y-hidden md:flex justify-center w-full">
			<NavbarTop />
			<Navbar />
			<div className="lg:w-5/12 mr-8">
				<SubmitForm />
				<Posts />
			</div>
			<Profile />
		</div>
	);
};

export default Home;
