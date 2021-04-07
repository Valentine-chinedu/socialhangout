import React, { useContext } from "react";
import { GoSearch } from "react-icons/go";
import { RiMessage2Fill, RiUserFill } from "react-icons/ri";
import { FaBars, FaBell } from "react-icons/fa";
import { auth } from "../../firebase";
import ElegentReactTooltip from "elegant-react-tooltip";
import { SideBarContext } from "../../contextProviders/SideBarProvider";

const NavbarTop = () => {
	const { setShowSideBar } = useContext(SideBarContext);

	return (
		<div className="fixed border-b border-primary md:absolute w-full z-50 h-14 flex justify-around items-center">
			<div className="relative hidden lg:flex items-center ml-6">
				<img className="h-48" src="/logo.png" alt="logo" />
			</div>
			<button onClick={() => setShowSideBar(true)} className="lg:hidden">
				<FaBars size={23} />
			</button>
			<div className="flex items-center border-b border-pr h-10 md:w-64 lg:w-96 w-56">
				<form className="flex ">
					<button type="submit">
						<GoSearch size={16} className="mr-2" />
					</button>
					<input
						className=" w-40 md:w-80 bg-primary text-sm tracking-wider focus:outline-none"
						type="text"
						placeholder="search location,users or posts..."
					/>
				</form>
			</div>
			<div className="md:flex items-center hidden ">
				<RiUserFill size={20} className="mr-2 text-purple-500" />
				<button
					className="text-sm font-semibold text-secondary transform ease-out duration-200 hover:scale-110"
					onClick={() => auth.signOut()}
				>
					Sign out
				</button>
			</div>
			<div className="flex items-center text-purple-700 md:mt-2 mt-3 lg:mt-0">
				<ElegentReactTooltip label="messages">
					<button className="mr-8 hidden md:flex">
						<RiMessage2Fill size={25} className="hover:text-purple-500 " />
					</button>
				</ElegentReactTooltip>
				<ElegentReactTooltip label="Notification">
					<button>
						<FaBell size={20} className="hover:text-purple-500 h-24 md:mt-1" />
					</button>
				</ElegentReactTooltip>
			</div>
		</div>
	);
};

export default NavbarTop;
