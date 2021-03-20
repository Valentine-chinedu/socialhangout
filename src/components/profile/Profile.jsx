/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../contextProviders/Auth";
import { ModalContext } from "../../contextProviders/ModalStateProvider";

const Profile = () => {
	const { setShowModal } = useContext(ModalContext);
	const { currentUser } = useContext(AuthContext);
	return (
		<div className="flex flex-col relative mt-20">
			<div className="mb-4">
				<div className=" relative h-36 w-80 bg-blue-600 rounded-t"></div>
				<div className=" flex flex-col justify-center items-center relative h-40 w-80 bg-gray-100 rounded-b">
					<h3 className="text-gray-700 mt-4 mb-2 font-bold">
						{currentUser.displayName}
					</h3>
					<div className="flex justify-evenly text-gray-700 w-full">
						<div className="flex flex-col items-center">
							<h4 className="text-xs opacity-70 tracking-wide mb-1">LIKES</h4>
							<h4 className="font-semibold tracking-wider text-gray-700">
								345
							</h4>
						</div>
						<div className="flex flex-col items-center">
							<h4 className="text-xs opacity-70 tracking-wide mb-1">SHOTS</h4>
							<h4 className="font-semibold tracking-wider text-gray-700">
								234
							</h4>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute inset-32 top-20 left-24 w-full">
				<img
					className="object-cover rounded-full w-32 h-32"
					src={currentUser.photoURL}
					alt=""
				/>
			</div>
			<button className="bg-purple-700 " onClick={() => setShowModal(true)}>
				Post
			</button>
		</div>
	);
};

export default Profile;
