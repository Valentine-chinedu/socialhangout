import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const Post = ({ profileImg, name, username, timestamp, message }) => {
	return (
		<div>
			<div className="flex justify-start pl-4 border-b py-4">
				<div className="">
					<img
						className="h-14 w-16 rounded-full object-cover"
						src={profileImg}
						alt=""
					/>
				</div>
				<div className="h-full w-full ml-4">
					<div className="flex">
						<h3 className="mr-2 font-bold text-gray-300">{name}</h3>
						<h3 className="mr-2 opacity-50">{username}</h3>
						<p className="mr-2 opacity-50">
							{new Date(parseInt(timestamp)).toUTCString()}
						</p>
					</div>
					<div className="mr-2 text-gray-300 text-sm">
						<p>{message}</p>
					</div>

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
