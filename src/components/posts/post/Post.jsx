import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const Post = ({ avatar, imgName, username, timestamp, message }) => {
	return (
		<div>
			<div className="flex h-auto justify-start pl-4 py-4 border-b border-primary lg:hover:bg-secondary">
				<div className="h-14">
					<img
						className="h-12 w-14 md:h-14 md:w-16 lg:h-20 lg:w-24 rounded-full object-cover"
						src={avatar}
						alt=""
					/>
				</div>
				<div className="w-full ml-4">
					<div className="flex flex-col md:items-center md:flex-row mb-2">
						<h3 className="mr-2 text-sm md:text-lg lg:text-lg text-primary font-bold">
							{username}
						</h3>
						<p className="mr-2 opacity-70 lg:mt-1 text-xs md:text-base">
							{new Date(parseInt(timestamp)).toUTCString()}
						</p>
					</div>
					<div className="mr-2 mb-2 text-primary text-sm lg:text-lg">
						<p className="md:text-lg">{message}</p>
					</div>

					{imgName ? (
						<div className="mr-2">
							<img
								className="object-cover object-center rounded-3xl h-64 md:h-96  w-full"
								src={`http://localhost:4000/retrieve/image/single?name=${imgName}`}
								alt=""
							/>
						</div>
					) : (
						console.log("no image")
					)}

					<div className="flex justify-around mt-4 pr-4">
						<button>
							<FaRegThumbsUp className="lg:text-2xl text-secondary hover:text-purple-700" />
						</button>
						<button>
							<FaRegCommentAlt className="lg:text-2xl text-secondary hover:text-purple-700" />
						</button>
						<button>
							<FiShare2 className="lg:text-2xl text-secondary hover:text-purple-700" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
