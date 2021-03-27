/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextProviders/Auth";
import db from "../../firebase";
import { storageRef } from "../../firebase";

const Profile = () => {
	const [showModal, setShowModal] = useState(false);
	const { currentUser } = useContext(AuthContext);

	return (
		<div className="flex flex-col relative mt-20">
			<div className="mb-4">
				<div className=" flex justify-start items-end relative lg:h-36 lg:w-80 md:h-28 md:w-64 bg-blue-600 rounded-t"></div>
				<div className=" flex flex-col justify-center items-center relative lg:h-36 lg:w-80 md:h-32 md:w-64 bg-gray-100 rounded-b">
					<h3 className="text-gray-700 mt-4 mb-2 font-bold">
						{currentUser.displayName}
					</h3>
				</div>
			</div>
			<div className="absolute lg:inset-32 md:inset-20 md:top-16 lg:top-14 lg:left-24 w-full">
				<img
					className="object-cover rounded-full lg:w-32 lg:h-32 md:w-24 md:h-24 ring-2 ring-gray-100"
					src={currentUser.photoURL}
					alt=""
				/>
			</div>
		</div>
	);
};

export default Profile;
