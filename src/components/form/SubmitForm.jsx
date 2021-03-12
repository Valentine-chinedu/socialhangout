import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

import FileUpload from "./FileUpload";

const SubmitForm = () => {
	const [postData, setPostData] = useState("");

	const handleSubmit = () => {
		console.log("submitting");
	};

	return (
		<div className="lg:absolute lg:inset-x-5 lg:bottom-4 lg:border lg:border-gray-600 lg:h-24 w-8/12 lg:rounded-md lg:flex lg:flex-col justify-center">
			<form>
				<div className="border-b border-gray-600 flex flex-col justify-self-center h-8">
					<input
						className="pl-4 focus:outline-none bg-black"
						type="text"
						name="creator"
						placeholder="what's on your mind?"
						value={postData.creator}
						onChange={(e) => setPostData(e.target.value)}
					/>
				</div>
				<div className="flex justify-between items-center pt-2 px-4">
					<FileUpload />
					<button OnClick={handleSubmit} type="submit">
						<AiOutlineSend size={24} className="text-purple-500" />
					</button>
				</div>
			</form>
		</div>
	);
};

export default SubmitForm;
