import React from "react";
import { GoSearch } from "react-icons/go";
import { RiUserFill } from "react-icons/ri";
import { auth } from "../../firebase";

const NavbarTop = () => {
	return (
		<div className="bg-gray-400 absolute w-full z-50 h-14">
			<div className="flex">
				<GoSearch />
				<input type="text" placeholder="search location,users or posts" />
			</div>
			<div>
				<RiUserFill />
				<button onClick={() => auth().signOut()}>Sign out</button>
			</div>
			<div></div>
		</div>
	);
};

export default NavbarTop;
