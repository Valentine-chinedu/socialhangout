/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { GoFileMedia } from "react-icons/go";
import TextareaAutosize from "react-textarea-autosize";
import firebase from "firebase";
import db from "../../firebase";
import { storageRef } from "../../firebase";
import { AuthContext } from "../../contextProviders/Auth";
import ElegentReactTooltip from "elegant-react-tooltip";
import { MessageContext } from "../../contextProviders/MessageProvider";

const SubmitForm = () => {
	const [input, setInput] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [imagePreview, setImagePreview] = useState(null);
	const { currentUser } = useContext(AuthContext);
	const { showMessageForm, setShowMessageForm } = useContext(MessageContext);

	const hiddenFileInput = React.useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		setShowMessageForm(false);

		db.collection("posts").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: currentUser.photoURL,
			username: currentUser.displayName,
			image: imageUrl,
		});

		setImageUrl("");
		setInput("");
	};

	// const savePost = async (postData) => {
	// 	await axios.post("/upload/post", postData).then((resp) => {
	// 		console.log(resp);
	// 	});
	// };

	const handleClick = (e) => {
		e.preventDefault();
		hiddenFileInput.current.click();
	};

	const handleFileChange = async (e) => {
		e.preventDefault();
		const file = e.target.files[0];
		const fileRef = storageRef.child(file.name);
		await fileRef.put(file);
		setImageUrl(await fileRef.getDownloadURL());
		setImagePreview(await fileRef.getDownloadURL());
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="hidden lg:flex justify-center absolute border-t mr-2 border-primary bg-primary h-auto z-50 w-full bottom-0 left-0 pb-8">
					<img
						className="object-cover rounded-full w-16 h-16 ml-32 mt-3"
						src={currentUser.photoURL}
						alt=""
					/>
					<div className="flex flex-col mt-5 pl-2 w-8/12 relative">
						<div className="mb-4 border-b border-primary mr-4">
							<TextareaAutosize
								className="pl-2 pr-2 w-11/12 h-auto text-xl focus:outline-none resize-none bg-primary pb-7 scrollbar-hide lg:mb-2"
								autoFocus
								autoComplete="true"
								placeholder="what's on your mind?"
								name="creator"
								value={input}
								onChange={(e) => setInput(e.target.value)}
							/>
							<div
								className={`relative ${imagePreview === null ? "hidden" : ""}`}
							>
								<div
									onClick={() => setImagePreview(null)}
									className="text-xl text-gray-300 mb-2 absolute lg:left-36 lg:bottom-14 cursor-pointer"
								>
									X
								</div>
								<img
									className={`h-16 w-32 mb-2 ml-2 ${
										imagePreview === null ? "hidden" : ""
									}`}
									src={imagePreview}
									alt=""
								/>
							</div>
						</div>

						<div className="flex pl-2 h-auto">
							<button className="focus:outline-none mr-4" onClick={handleClick}>
								<ElegentReactTooltip label="Upload media">
									<GoFileMedia size={30} className="text-purple-700" />
								</ElegentReactTooltip>
							</button>

							<input
								className="hidden"
								type="file"
								ref={hiddenFileInput}
								onChange={handleFileChange}
							/>
							<button
								className={`focus:outline-none rounded-3xl bg-purple-800 mr-8 px-4 tracking-wide text-gray-200 ${
									!imageUrl && !input ? "disabled:opacity-50" : ""
								}`}
								onClick={() => setImagePreview(null)}
								type="submit"
								disabled={!imageUrl && !input}
							>
								POST
							</button>
						</div>
					</div>
				</div>
				{/* message form for small and medium screen */}
			</form>
			{showMessageForm ? (
				<>
					<div className="justify-center items-center flex flex-col mx-4 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div
							onClick={() => setShowMessageForm(false)}
							className="text-3xl md:text-4xl text-gray-300 mb-8"
						>
							X
						</div>
						<form onSubmit={handleSubmit}>
							<div className="rounded-md flex pt-8 px-10 w-96 md:w-full md:h-80 md:pt-20 bg-gray-800">
								<img
									className="object-cover rounded-full w-16 h-16 md:w-20 md:h-20 ml-2 md:ml-5 mt-3"
									src={currentUser.photoURL}
									alt=""
								/>
								<div className="flex flex-col mt-7 pl-2 w-full relative">
									<div>
										<TextareaAutosize
											className="pl-2 w-64 bg-gray-800 text-gray-300 h-auto focus:outline-none resize-none pb-7 md:pb-4 mb-6 md:mb-4 md:mr-8 md:w-80 md:text-xl"
											autoFocus
											autoComplete="true"
											placeholder="what's on your mind?"
											name="creator"
											value={input}
											onChange={(e) => setInput(e.target.value)}
										/>
									</div>
									<div
										className={`relative ${
											imagePreview === null ? "hidden" : ""
										}`}
									>
										<div
											onClick={() => setImagePreview(null)}
											className="text-xs md:text-lg text-gray-300 mb-2 absolute right-32 bottom-16 md:right-56 md:bottom-14 cursor-pointer"
										>
											X
										</div>
										<img
											className="object-fill h-16 w-24 mb-2 ml-2"
											src={imagePreview}
											alt=""
										/>
									</div>

									<div className="flex items-center pl-2 mb-8 md:mb-4 border-t pt-4 md:pt-0">
										<button
											className="focus:outline-none mr-12"
											onClick={handleClick}
										>
											<GoFileMedia
												size={25}
												className="text-purple-500 md:h-32"
											/>
										</button>

										<input
											className="hidden"
											type="file"
											ref={hiddenFileInput}
											onChange={handleFileChange}
										/>
										<button
											className={`focus:outline-none rounded-3xl bg-purple-800 mr-8 px-4 tracking-wide text-gray-200 ${
												!imageUrl && !input ? "disabled:opacity-50" : ""
											}`}
											type="submit"
											disabled={!imageUrl && !input}
										>
											POST
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
					{/* empty div to give the modal a dark background */}
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};

export default SubmitForm;
