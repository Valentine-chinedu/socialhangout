import React, { useContext } from "react";
import { GrAdd } from "react-icons/gr";
import { MessageContext } from "../../../contextProviders/MessageProvider";
import { SideBarContext } from "../../../contextProviders/SideBarProvider";

const PostButton = () => {
	const { setShowMessageForm } = useContext(MessageContext);
	const { showSideBar } = useContext(SideBarContext);

	return (
		<div
			onClick={() => setShowMessageForm(true)}
			className="fixed z-40 bottom-4 right-1 lg:hidden md:bottom-10 md:right-5"
		>
			<button
				className={`font-semibold bg-purple-700 rounded-full px-2 py-2 md:px-3 md:py-3 mr-1.5 mb-1.5 focus:outline-none shadow-2xl ${
					showSideBar ? "hidden" : ""
				}`}
				disabled={showSideBar}
			>
				<GrAdd className="text-primary text-3xl md:text-6xl" />
			</button>
		</div>
	);
};

export default PostButton;
