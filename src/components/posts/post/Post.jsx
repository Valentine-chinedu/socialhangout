import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const Post = ({ profilePic, image, username, timestamp, message }) => {
	console.log(username);
	return (
		<div>
			<div className="flex h-auto justify-start pl-4 py-4 border-b border-gray-700">
				<div className="">
					<img
						className="h-14 w-16 rounded-full object-cover"
						src={profilePic}
						alt=""
					/>
				</div>
				<div className="h-full w-full ml-4">
					<div className="flex mb-2">
						<h3 className="mr-2 text-gray-100">{username}</h3>
						<p className="mr-2 opacity-50">
							{new Date(timestamp?.toDate()).toUTCString()}
						</p>
					</div>
					<div className="mr-2 mb-2 text-gray-300 text-sm">
						<p>{message}</p>
					</div>

					{image ? (
						<div className="mr-2">
							<img className="object-contain rounded-md" src={image} alt="" />
						</div>
					) : (
						""
					)}

					<div className="flex justify-between mt-4 pr-4">
						<FaRegThumbsUp className="opacity-50" />
						<FaRegCommentAlt className="opacity-50" />
						<FiShare2 className="opacity-50" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
