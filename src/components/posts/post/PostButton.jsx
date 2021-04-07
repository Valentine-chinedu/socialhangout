import React, { useContext } from "react";
import { GrAdd } from "react-icons/gr";
import { MessageContext } from "../../../contextProviders/MessageProvider";

const PostButton = () => {
	const { setShowMessageForm } = useContext(MessageContext);

	return (
		<div
			onClick={() => setShowMessageForm(true)}
			className="fixed z-40 bottom-4 right-1 md:bottom-10 md:right-5 lg:hidden"
		>
			<button className="text-gray-900 font-semibold bg-purple-700 rounded-full px-2 py-2 md:px-3 md:py-3 mr-1.5 mb-1.5 focus:outline-none">
				<GrAdd className="text-3xl md:text-6xl" />
			</button>
		</div>
	);
};

export default PostButton;
