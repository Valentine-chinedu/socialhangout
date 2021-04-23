import React from "react";

import Profile from "../profile/Profile";
import SideBar from "../navbar/SideBar";
import NavbarTop from "../navbar/NavbarTop";

import Feed from "../feed/Feed";
import PostButton from "../posts/post/PostButton";

const Layout = () => {
	return (
		<div className="h-screen bg-primary text-primary relative md:flex justify-center w-full overflow-scroll md:overflow-hidden scrollbar-hide">
			<NavbarTop />
			<SideBar />
			<Feed />
			<Profile />
			<PostButton />
		</div>
	);
};

export default Layout;
