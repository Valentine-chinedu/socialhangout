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
		<div className="fixed border-b border-primary bg-primary md:absolute w-full z-40 h-14 lg:h-16 flex justify-around items-center">
			<div className="relative hidden lg:flex items-center ml-8">
				<img className="h-48" src="/logo.png" alt="logo" />
			</div>
			<button
				onClick={() => setShowSideBar(true)}
				className="lg:hidden focus:outline-none"
			>
				<FaBars size={23} />
			</button>
			<div className="flex items-center h-10 md:w-64 lg:w-96 w-60">
				<form className="flex border-b border-primary pb-2">
					<button type="submit" className="focus:outline-none">
						<GoSearch className="mr-2 lg:mr-3 lg:text-2xl" />
					</button>
					<input
						className=" w-60 md:w-80 lg:w-96 lg:h-10 lg:text-lg bg-primary text-sm tracking-wider focus:outline-none"
						type="text"
						placeholder="search..."
					/>
				</form>
			</div>
			<div className="lg:flex items-center hidden ">
				<RiUserFill className="mr-2 text-purple-500 text-3xl" />
				<button
					className="text-sm lg:text-base font-semibold text-secondary transform ease-in-out duration-300 hover:scale-110"
					onClick={() => auth.signOut()}
				>
					Sign out
				</button>
			</div>
			<div className="flex items-center text-purple-700 md:mt-2 mt-3 lg:mt-0">
				<ElegentReactTooltip label="messages">
					<button className="mr-8 hidden md:flex">
						<RiMessage2Fill className="hover:text-purple-500 md:text-2xl lg:text-3xl" />
					</button>
				</ElegentReactTooltip>
				<ElegentReactTooltip label="Notification">
					<button className="focus:outline-none">
						<FaBell className="hover:text-purple-500 md:mt-1 md:text-2xl lg:text-2xl " />
					</button>
				</ElegentReactTooltip>
			</div>
		</div>
	);
};

export default NavbarTop;
