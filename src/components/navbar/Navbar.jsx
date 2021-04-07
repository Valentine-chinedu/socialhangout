import React, { useContext } from "react";
import { FaRegEnvelope, FaUser, FaUserFriends } from "react-icons/fa";
import { MdHome, MdBookmarkBorder } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { ModalContext } from "../../contextProviders/ModalProvider";
import { SideBarContext } from "../../contextProviders/SideBarProvider";
import { ThemeContext } from "../../contextProviders/ThemeContext";

const Navbar = () => {
	const { setShowModal } = useContext(ModalContext);
	const { showSideBar, setShowSideBar } = useContext(SideBarContext);
	const { theme, setTheme } = useContext(ThemeContext);

	function isLight() {
		return theme === "light";
	}

	console.log(showSideBar);
	let classes = `flex flex-col fixed overflow-x-hidden transition-width duration-1000 ease-out left-0 top-0 z-50 h-full lg:mt-16 lg:mr-8 lg:z-50 lg:w-72 lg:overflow-visible lg:relative lg:transition-none ${
		!showSideBar ? "w-0" : "w-80 md:w-4/5"
	}`;

	return (
		<div className="flex flex-col bg-secondary lg:bg-primary">
			<div className={classes}>
				<div className="flex justify-end mb-4">
					<button
						onClick={() => setShowSideBar(false)}
						className="lg:hidden mr-4 text-3xl focus:outline-none md:text-6xl"
					>
						x
					</button>
				</div>
				<div className="pl-4">
					<div className="mb-8 ml-1 md:mb-12 md:ml-0">
						<button className="flex items-center lg:hover:bg-purple-700 lg:py-2 lg:px-4 rounded-3xl focus:outline-none ">
							<MdHome className="text-5xl md:text-6xl lg:text-5xl" />
							<h2 className="ml-2 text-2xl font-semibold md:text-4xl md:ml-8 lg:ml-5 lg:text-3xl lg:flex">
								Home
							</h2>
						</button>
					</div>
					<div className="mb-8 ml-2 md:mb-12 md:ml-0">
						<button
							onClick={() => setShowModal(true)}
							className="lg:hidden flex items-center lg:hover:bg-purple-700 rounded-3xl focus:outline-none"
						>
							<FaUser className="text-4xl md:text-5xl" />
							<h2 className="ml-4 text-xl font-semibold md:text-4xl md:ml-11 lg:text-3xl lg:flex">
								Profile
							</h2>
						</button>
					</div>
					<div className="mb-8 ml-1.5 md:mb-12 md:ml-0">
						<button className="flex items-center lg:hover:bg-purple-700 lg:py-2 lg:px-4 rounded-3xl focus:outline-none">
							<IoMdPhotos className="text-4xl md:text-6xl lg:text-4xl" />
							<h2 className="ml-4 text-xl font-semibold md:text-4xl md:ml-8 lg:ml-7 lg:text-3xl lg:flex">
								Photos
							</h2>
						</button>
					</div>
					<div className="mb-8 ml-0.5 md:mb-12 md:ml-0">
						<button className="flex items-center lg:hover:bg-purple-700 lg:py-2 lg:px-4 rounded-3xl focus:outline-none">
							<MdBookmarkBorder className="text-5xl md:text-6xl lg:text-4xl" />
							<h2 className="ml-2 text-xl font-semibold md:text-4xl md:ml-7 lg:text-3xl lg:flex">
								Saved
							</h2>
						</button>
					</div>
					<div className="mb-8 ml-2 md:mb-12 md:ml-0">
						<button className="flex items-center lg:hover:bg-purple-700 lg:py-2 lg:px-4 rounded-3xl focus:outline-none">
							<FaRegEnvelope className="text-4xl md:text-5xl lg:text-4xl" />
							<h2 className="ml-3 text-xl font-semibold md:text-4xl md:ml-10 lg:ml-6 lg:text-3xl lg:flex">
								Messages
							</h2>
						</button>
					</div>
					<div className="ml-2 md:mb-12 md:ml-0">
						<button className="flex items-center lg:hover:bg-purple-700 lg:py-2 lg:px-4 rounded-3xl focus:outline-none">
							<FaUserFriends className="text-4xl md:text-6xl lg:text-4xl" />
							<h2 className="ml-3 text-xl font-semibold md:text-4xl md:ml-6 lg:text-3xl lg:flex">
								Friends
							</h2>
						</button>
					</div>
				</div>
			</div>
			<div className="">
				<label>
					<input
						type="checkbox"
						checked={isLight()}
						onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
					></input>
					Light Mode
				</label>
			</div>
		</div>
	);
};

export default Navbar;
