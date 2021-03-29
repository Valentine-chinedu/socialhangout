import React, { useContext } from "react";
import { FaRegEnvelope, FaUser, FaUserFriends } from "react-icons/fa";
import { MdHome, MdBookmarkBorder } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { ModalContext } from "../../contextProviders/ModalProvider";

const Navbar = () => {
	const { setShowModal } = useContext(ModalContext);

	return (
		<div className=" lg:pr-16 lg:mt-20 mt-20 md:pl-6 md:w-2/12">
			<div className="mb-8">
				<button className="flex items-center hover:bg-purple-700 p-2 rounded-3xl">
					<MdHome size={30} />
					<h2 className="ml-4 text-2xl font-semibold sm:hidden lg:flex">
						Home
					</h2>
				</button>
			</div>
			<div className="mb-8">
				<button
					onClick={() => setShowModal(true)}
					className="lg:hidden flex items-center hover:bg-purple-700 p-2 rounded-3xl"
				>
					<FaUser size={30} />
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
