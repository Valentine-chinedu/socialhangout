import React from "react";

import Profile from "../profile/Profile";
import Navbar from "../navbar/Navbar";
import NavbarTop from "../navbar/NavbarTop";

import Home from "../home/Home";
import PostButton from "../posts/post/PostButton";

const Layout = () => {
	return (
		<div className="h-screen bg-primary text-primary relative md:flex justify-center w-full overflow-scroll md:overflow-hidden scrollbar-hide">
			<NavbarTop />
			<Navbar />
			<Home />
			<Profile />
			<PostButton />
		</div>
	);
};

export default Layout;
