import React, { useContext } from "react";
import { FaRegEnvelope, FaUserFriends } from "react-icons/fa";
import { MdHome, MdBookmarkBorder } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { SideBarContext } from "../../contextProviders/SideBarProvider";
import { ThemeContext } from "../../contextProviders/ThemeContext";
import { AuthContext } from "../../contextProviders/Auth";
import { auth } from "../../firebase";
import { RiUserFill } from "react-icons/ri";

const Navbar = () => {
	const { showSideBar, setShowSideBar } = useContext(SideBarContext);
	const { theme, setTheme } = useContext(ThemeContext);
	const { currentUser } = useContext(AuthContext);

	function isLight() {
		return theme === "light";
	}

	let classes = `flex flex-col h-full fixed overflow-x-hidden transition-width duration-700 ease-out left-0 top-0 lg:items-center bg-secondary lg:bg-primary lg:mt-16 lg:space-y-40 lg:mr-2 lg:z-40 z-50 lg:w-72 lg:overflow-visible lg:relative lg:transition-none ${
		!showSideBar ? "w-0" : "w-80 md:w-4/5"
	}`;

	return (
		<>
			<div className={classes}>
				<div className="flex flex-col">
					<div className="flex justify-end mb-4 lg:hidden">
						<button
							onClick={() => setShowSideBar(false)}
							className=" mr-4 md:mr-6 text-3xl focus:outline-none md:text-5xl"
						>
							x
						</button>
					</div>
					<div className="lg:hidden pl-5 pb-2 border-b border-primary mb-4 md:mb-8 md:pl-8 md:pb-8">
						<div className="mb-2">
							<img
								className="rounded-full h-16 w-16 md:h-20 md:w-20"
								src={currentUser.photoURL}
								alt=""
							/>
						</div>
						<h3 className="font-semibold mb-2 md:text-xl">
							{currentUser.displayName}
						</h3>
					</div>

					<div className="pl-4 pb-4 md:pb-0 md:pl-6 lg:pb-0 lg:pl-4 mb-8 lg:mb-0 border-primary border-b lg:border-b-0 lg:mr-12">
						<div className="mb-8 lg:ml-1 md:mb-12 md:ml-0">
							<button className="flex items-center transform ease-out duration-500 lg:hover:scale-110 lg:py-2 lg:px-6 rounded-3xl focus:outline-none ">
								<MdHome className="text-4xl text-purple-700 md:text-6xl lg:text-7xl" />
								<h2 className="ml-8 text-2xl font-semibold md:text-4xl md:ml-12 lg:ml-11 lg:text-3xl lg:flex">
									Home
								</h2>
							</button>
						</div>

						<div className="mb-8 ml-1 lg:ml-1.5 md:mb-12 md:ml-0">
							<button className="flex items-center transform ease-out duration-500 lg:hover:scale-110 lg:py-2 lg:px-6 rounded-3xl focus:outline-none">
								<IoMdPhotos className="text-3xl text-purple-700 md:text-6xl lg:text-6xl" />
								<h2 className="ml-8 text-xl font-semibold md:text-4xl md:ml-12 lg:ml-14 lg:text-3xl lg:flex">
									Photos
								</h2>
							</button>
						</div>
						<div className="mb-8 lg:ml-0.5 md:mb-12 md:ml-0">
							<button className="flex items-center transform ease-in-out duration-500 lg:hover:scale-110 lg:py-2 lg:px-6 rounded-3xl focus:outline-none">
								<MdBookmarkBorder className="text-4xl text-purple-700 md:text-6xl lg:text-7xl" />
								<h2 className="ml-7 text-xl font-semibold md:text-4xl md:ml-11 lg:ml-12 lg:text-3xl lg:flex">
									Saved
								</h2>
							</button>
						</div>
						<div className="mb-8 ml-1.5 lg:ml-2 md:mb-12 md:ml-2">
							<button className="flex items-center transform ease-out duration-500 lg:hover:scale-110 lg:py-2 lg:px-6 rounded-3xl focus:outline-none">
								<FaRegEnvelope className="text-3xl text-purple-700 md:text-5xl lg:text-6xl" />
								<h2 className="ml-7 text-xl font-semibold md:text-4xl md:ml-12 lg:ml-12 lg:text-3xl lg:flex">
									Messages
								</h2>
							</button>
						</div>
						<div className="ml-1.5 lg:ml-2 md:mb-10 md:ml-1 lg:mb-0">
							<button className="flex items-center transform ease-out duration-500 lg:hover:scale-110 lg:py-2 lg:px-6 rounded-3xl focus:outline-none">
								<FaUserFriends className="text-4xl text-purple-700 md:text-6xl lg:text-6xl" />
								<h2 className="ml-5 text-xl font-semibold md:text-4xl md:ml-11 lg:ml-12 lg:text-3xl lg:flex">
									Friends
								</h2>
							</button>
						</div>
					</div>
				</div>
				<div className="flex items-center lg:hidden pl-4 mb-8 md:pl-6 md:mb-16">
					<RiUserFill className="mr-4 text-purple-700 text-4xl md:text-5xl md:mr-8" />
					<button
						className="text-sm md:text-2xl font-bold text-primary"
						onClick={() => auth.signOut()}
					>
						Sign out
					</button>
				</div>
				<div className="pl-6 md:pl-8 lg:pl-0 lg:mr-5">
					<label className="md:text-2xl lg:text-2xl">
						<input
							className="mr-2 md:mr-4 md:h-6 md:w-6 lg:h-8 lg:w-8"
							type="checkbox"
							checked={isLight()}
							onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
						></input>
						Light Mode
					</label>
				</div>
			</div>
		</>
	);
};

export default Navbar;
