import React from "react";
import Post from "./post/Post";

const Posts = () => {
	const img = "/avatar_hat.jpg";
	const name = "chinedu okosi";
	const userName = "@okosival";
	const timestamp = "1601493943737";
	const message =
		"whatsup my people. how una dey, hows home, how papa, how mama, how siste";

	return (
		<div className="h-full w-full">
			<Post
				profileImg={img}
				name={name}
				username={userName}
				timestamp={timestamp}
				message={message}
			/>
		</div>
	);
};

export default Posts;
