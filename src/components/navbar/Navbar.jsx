import React from "react";
import { FaRegEnvelope, FaUserFriends } from "react-icons/fa";
import { MdHome, MdBookmarkBorder } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";

const Navbar = () => {
	return (
		<div className=" pr-16 mt-20 ">
			<div className="mb-8">
				<button className="flex items-center hover:bg-purple-700 p-2 rounded-3xl">
					<MdHome size={30} />
					<h2 className="ml-4 text-2xl font-semibold sm:hidden lg:flex">
						Home
					</h2>
				</button>
			</div>
			<div className="mb-8">
				<button className="flex items-center hover:bg-purple-700 p-2 rounded-3xl">
					<IoMdPhotos size={30} />
					<h2 className="ml-4 text-xl font-semibold sm:hidden lg:flex">
						Photos
					</h2>
				</button>
			</div>
			<div className="mb-8">
				<button className="flex items-center hover:bg-purple-700 p-2 rounded-3xl">
					<MdBookmarkBorder size={30} />
					<h2 className="ml-4 text-xl font-semibold sm:hidden lg:flex">
						Saved
					</h2>
				</button>
			</div>
			<div className="mb-8">
				<button className="flex items-center hover:bg-purple-700 p-2 rounded-3xl">
					<FaRegEnvelope size={25} />
					<h2 className="ml-4 text-xl font-semibold sm:hidden lg:flex">
						Messages
					</h2>
				</button>
			</div>
			<div>
				<button className="flex items-center hover:bg-purple-700 p-2 rounded-3xl">
					<FaUserFriends size={30} />
					<h2 className="ml-4 text-xl font-semibold sm:hidden lg:flex">
						Friends
					</h2>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
