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
import FormData from "form-data";
import axios from "../../axios";

const SubmitForm = () => {
	const [input, setInput] = useState("");
	const [ImageUrl, setImageUrl] = useState("");
	const { currentUser } = useContext(AuthContext);
	const { showMessageForm, setShowMessageForm } = useContext(MessageContext);

	const [image, setImage] = useState(null);

	const hiddenFileInput = React.useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		setShowMessageForm(false);

		if (image) {
			const imgForm = new FormData();
			imgForm.append("file", image, image.name);

			axios
				.post("/upload/image", imgForm, {
					header: {
						accept: "application/json",
						"Accept-language": "en-US,en;q=0.8",
						"content-Type": `multipart/form-data; boundary=${imgForm._boundary}`,
					},
				})
				.then((res) => {
					console.log(res.data);

					const postData = {
						message: input,
						imgName: res.data.filename,
						user: currentUser.displayName,
						avatar: currentUser.photoURL,
						timestamp: Date.now(),
					};
					console.log(postData);
					savePost(postData);
				});
		} else {
			const postData = {
				message: input,
				user: currentUser.displayName,
				avatar: currentUser.photoURL,
				timestamp: Date.now(),
			};
			console.log(postData);
			savePost(postData);
		}

		setImageUrl("");
		setInput("");
		setImage(null);
	};

	const savePost = async (postData) => {
		await axios.post("/upload/post", postData).then((resp) => {
			console.log(resp);
		});
	};

	const handleClick = (e) => {
		e.preventDefault();
		hiddenFileInput.current.click();
	};

	const handleFileChange = async (e) => {
		e.preventDefault();
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
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
								className="pl-2 pr-2 w-11/12 h-auto text-xl focus:outline-none resize-none bg-primary pb-7 scrollbar-hide"
								autoFocus
								autoComplete="true"
								placeholder="what's on your mind?"
								name="creator"
								value={input}
								onChange={(e) => setInput(e.target.value)}
							/>
						</div>

						<div className="flex pl-2 h-auto">
							<button className="focus:outline-none mr-4" onClick={handleClick}>
								<ElegentReactTooltip label="Upload media">
									<GoFileMedia size={30} className="text-purple-800" />
								</ElegentReactTooltip>
							</button>

							<input
								className="hidden"
								type="file"
								ref={hiddenFileInput}
								onChange={handleFileChange}
							/>
							<button
								className="focus:outline-none rounded-3xl bg-purple-800 mr-8 px-4 tracking-wide text-gray-200"
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
					<div className="justify-center items-center flex flex-col mx-4 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div
							onClick={() => setShowMessageForm(false)}
							className="text-3xl md:text-4xl text-gray-300 mb-8"
						>
							X
						</div>
						<form onSubmit={handleSubmit}>
							<div className=" border border-gray-700 rounded-md flex pt-8 px-10 w-96 md:w-full bg-gray-800">
								<img
									className="object-cover rounded-full w-16 h-16 md:w-20 md:h-20 ml-2 md:ml-5 mt-3"
									src={currentUser.photoURL}
									alt=""
								/>
								<div className="flex flex-col mt-7 pl-2 w-full relative">
									<div>
										<TextareaAutosize
											className="pl-2 w-64 bg-gray-800 h-auto focus:outline-none resize-none pb-7 md:pb-4 mb-6 md:mb-4 md:mr-8 md:w-80 md:text-xl"
											autoFocus
											autoComplete="true"
											placeholder="what's on your mind?"
											name="creator"
											value={input}
											onChange={(e) => setInput(e.target.value)}
										/>
									</div>

									<div className="flex items-center pl-2 mb-8 md:mb-4 border-t pt-4 md:pt-0">
										<button
											className="focus:outline-none mr-12"
											onClick={handleClick}
										>
											<ElegentReactTooltip label="Upload media">
												<GoFileMedia
													size={25}
													className="text-purple-500 md:h-32"
												/>
											</ElegentReactTooltip>
										</button>

										<input
											className="hidden"
											type="file"
											ref={hiddenFileInput}
											onChange={handleFileChange}
										/>
										<button
											className="rounded-3xl bg-purple-500 mr-8 md:px-2 px-3 py-1 md:py-2 tracking-wide text-gray-900 text-xs font-semibold md:font-bold focus:outline-none"
											type="submit"
										>
											POST
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
