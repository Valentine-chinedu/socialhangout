import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const Post = ({ avatar, imgName, username, timestamp, message }) => {
	return (
		<div>
			<div className="flex h-auto justify-start pl-4 py-4 border-b border-primary">
				<div className="h-14">
					<img
						className="h-12 w-14 md:h-14 md:w-16 rounded-full object-cover"
						src={avatar}
						alt=""
					/>
				</div>
				<div className="h-auto w-full ml-4">
					<div className="flex flex-col md:flex-row  mb-2">
						<h3 className="mr-2 text-sm md:text-base text-primary font-semibold">
							{username}
						</h3>
						<p className="mr-2 opacity-50 text-xs md:text-base">
							{new Date(parseInt(timestamp)).toUTCString()}
						</p>
					</div>
					<div className="mr-2 mb-2 text-primary text-sm">
						<p>{message}</p>
					</div>

					{imgName ? (
						<div className="mr-2">
							<img
								className="object-cover rounded-md"
								src={`http://localhost:4000/retrieve/image/single?name=${imgName}`}
								alt=""
							/>
						</div>
					) : (
						console.log("no image")
					)}

					<div className="flex justify-around mt-4 pr-4">
						<button>
							<FaRegThumbsUp className="opacity-50 text-primary" />
						</button>
						<button>
							<FaRegCommentAlt className="opacity-50" />
						</button>
						<button>
							<FiShare2 className="opacity-50" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
