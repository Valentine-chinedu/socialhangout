import React from "react";
import { GoSearch } from "react-icons/go";
import { RiMessage2Fill, RiUserFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { auth } from "../../firebase";
import ElegentReactTooltip from "elegant-react-tooltip";

const NavbarTop = () => {
	return (
		<div className=" border-b border-gray-600 absolute w-full z-50 h-14 flex justify-around items-center">
			<div className="flex items-center lg:mr-4 md:mr-0">
				<img className="lg:h-48 md:h-36" src="/logo.png" alt="logo" />
			</div>
			<div className="flex items-center border-b border-gray-600 h-10 md:w-64">
				<form className="flex ">
					<button type="submit">
						<GoSearch size={16} className="mr-2" />
					</button>
					<input
						className="w-96 bg-black text-sm tracking-wider focus:outline-none"
						type="text"
						placeholder="search location,users or posts..."
					/>
				</form>
			</div>
			<div className="flex items-center">
				<RiUserFill size={20} className="mr-2 text-purple-500" />
				<button
					className="text-sm font-semibold text-gray-100 transform ease-out duration-200 hover:scale-110"
					onClick={() => auth.signOut()}
				>
					Sign out
				</button>
			</div>
			<div className="flex items-center text-purple-700 md:mt-2">
				<ElegentReactTooltip label="messages">
					<button className="mr-4">
						<RiMessage2Fill size={20} className="hover:text-purple-500" />
					</button>
				</ElegentReactTooltip>
				<ElegentReactTooltip label="Notification">
					<button>
						<FaBell size={20} className="hover:text-purple-500" />
					</button>
				</ElegentReactTooltip>
			</div>
		</div>
	);
};

export default NavbarTop;
