import React, { useContext } from "react";
import { MessageContext } from "../../../contextProviders/MessageProvider";

const PostButton = () => {
	const { setShowMessageForm } = useContext(MessageContext);

	return (
		<div
			onClick={() => setShowMessageForm(true)}
			className="absolute z-50 bottom-20 right-10"
		>
			<button className="text-xl text-gray-100 font-semibold bg-purple-700 rounded-full px-4 py-6">
				POST
			</button>
		</div>
	);
};

export default PostButton;
