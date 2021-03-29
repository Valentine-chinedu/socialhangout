/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { GoFileMedia } from "react-icons/go";
import TextareaAutosize from "react-textarea-autosize";
import firebase from "firebase";
import db from "../../firebase";
import { storageRef } from "../../firebase";
import { StorageContext } from "../../contextProviders/ModalProvider";
import { AuthContext } from "../../contextProviders/Auth";
import ElegentReactTooltip from "elegant-react-tooltip";
import { MessageContext } from "../../contextProviders/MessageProvider";

const SubmitForm = () => {
	const [input, setInput] = useState("");
	const [ImageURL, setImageURL] = useState(null);
	const { currentUser } = useContext(AuthContext);
	const { showMessageForm, setShowMessageForm } = useContext(MessageContext);

	const { image, setImage } = useState();

	const hiddenFileInput = React.useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		setShowMessageForm(false);

		db.collection("posts").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: currentUser.photoURL,
			username: currentUser.displayName,
			image: ImageURL,
		});

		setInput("");
	};

	const handleClick = (e) => {
		e.preventDefault();
		hiddenFileInput.current.click();
	};

	const handleFileChange = async (e) => {
		const file = e.target.files[0];
		const fileRef = storageRef.child(file.name);
		await fileRef.put(file);
		setImageURL(await fileRef.getDownloadURL());
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="hidden border border-gray-700 h-auto lg:mt-20 md:mt-20 rounded-md w-full">
					<img
						className="object-cover rounded-full w-14 h-14 ml-4 mt-3"
						src={currentUser.photoURL}
						alt=""
					/>
					<div className="flex flex-col mt-7 pl-2 w-full relative">
						<div>
							<TextareaAutosize
								className="pl-2 pr-2 w-full h-auto focus:outline-none resize-none bg-black pb-7"
								autoFocus
								autoComplete="true"
								placeholder="what's on your mind?"
								name="creator"
								value={input}
								onChange={(e) => setInput(e.target.value)}
							/>
						</div>

						<div className="flex pl-2 justify-between mb-4 h-auto">
							<button className="focus:outline-none" onClick={handleClick}>
								<ElegentReactTooltip label="Upload media">
									<GoFileMedia size={25} className="text-purple-500" />
								</ElegentReactTooltip>
							</button>

							<input
								className="invisible"
								type="file"
								ref={hiddenFileInput}
								onChange={handleFileChange}
							/>
							<button
								className="rounded-3xl bg-purple-800 mr-8 px-4 tracking-wide text-gray-200"
								type="submit"
							>
								POST
							</button>
						</div>
					</div>
				</div>
			</form>
			{showMessageForm ? (
				<>
					<div className="justify-center items-center flex flex-col lg:hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div
							onClick={() => setShowMessageForm(false)}
							className="text-3xl text-gray-300 mb-8"
						>
							X
						</div>
						<form onSubmit={handleSubmit}>
							<div className="hidden border border-gray-700 md:h-auto rounded-md md:flex pt-8 px-10 w-12/12 bg-gray-800">
								<img
									className="object-cover rounded-full w-16 h-16 ml-10 mt-3"
									src={currentUser.photoURL}
									alt=""
								/>
								<div className="flex flex-col mt-7 pl-2 w-full relative">
									<div>
										<TextareaAutosize
											className="pl-2 md:text-lg w-96 bg-gray-800 h-auto focus:outline-none resize-none pb-7 mb-6"
											autoFocus
											autoComplete="true"
											placeholder="what's on your mind?"
											name="creator"
											value={input}
											onChange={(e) => setInput(e.target.value)}
										/>
									</div>

									<div className="flex pl-2 mb-8 border-t pt-4">
										<button
											className="focus:outline-none mr-12"
											onClick={handleClick}
										>
											<ElegentReactTooltip label="Upload media">
												<GoFileMedia size={35} className="text-purple-500" />
											</ElegentReactTooltip>
										</button>

										<input
											className="hidden"
											type="file"
											ref={hiddenFileInput}
											onChange={handleFileChange}
										/>
										<button
											className="rounded-3xl bg-purple-500 mr-8 md:px-2 tracking-wide text-gray-200"
											type="submit"
										>
											SEND
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};

export default SubmitForm;
