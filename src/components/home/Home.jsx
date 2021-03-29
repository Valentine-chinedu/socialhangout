import React from "react";
import Posts from "../posts/Posts";
import SubmitForm from "../form/SubmitForm";
import Profile from "../profile/Profile";
import Navbar from "../navbar/Navbar";
import NavbarTop from "../navbar/NavbarTop";
import PostButton from "../posts/post/PostButton";

const Home = () => {
	return (
		<div className=" theme-dark relative overflow-hidden md:flex justify-center w-full">
			<NavbarTop />
			<Navbar />
			<div className="relative lg:w-5/12 lg:mr-8 w-full">
				<SubmitForm />
				<Posts />
				<PostButton />
			</div>
			<Profile />
		</div>
	);
};

export default Home;
