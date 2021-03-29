/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextProviders/Auth";
import { ModalContext } from "../../contextProviders/ModalProvider";

const Profile = () => {
	const { currentUser } = useContext(AuthContext);
	const { showModal, setShowModal } = useContext(ModalContext);

	return (
		<>
			<div className="hidden lg:flex flex-col relative mt-20">
				<div className="mb-4">
					<div className=" flex justify-start items-end relative h-36 w-80 bg-blue-600 rounded-t"></div>
					<div className=" flex flex-col justify-center items-center relative h-36 w-80 bg-gray-100 rounded-b">
						<h3 className="text-gray-700 lg:mt-4 md:mt-8 mb-2 font-bold">
							{currentUser.displayName}
						</h3>
					</div>
				</div>
				<div className="absolute inset-32 top-14 left-24 w-full">
					<img
						className="object-cover rounded-full w-32 h-32 ring-2 ring-gray-100"
						src={currentUser.photoURL}
						alt=""
					/>
				</div>
			</div>
			{showModal ? (
				<>
					<div
						onClick={() => setShowModal(false)}
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					>
						<div className="flex flex-col relative mt-20">
							<div className="mb-4">
								<div className=" flex justify-start items-end relative h-36 w-80 bg-blue-600 rounded-t"></div>
								<div className=" flex flex-col justify-center items-center relative h-36 w-80 bg-gray-100 rounded-b">
									<h3 className="text-gray-700 mt-4  mb-2 font-bold">
										{currentUser.displayName}
									</h3>
								</div>
							</div>
							<div className="absolute inset-32 top-14 left-24 w-full">
								<img
									className="object-cover rounded-full w-32 h-32 ring-2 ring-gray-100"
									src={currentUser.photoURL}
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};

export default Profile;
