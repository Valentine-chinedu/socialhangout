import React, { useEffect, useState } from "react";
import Post from "./post/Post";

import db from "../../firebase";

const Posts = () => {
	// eslint-disable-next-line no-unused-vars

	const [postsData, setPostsData] = useState([]);

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				setPostsData(
					snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
				)
			);
	}, []);

	return (
		<div className="h-full w-full mt-4 border border-gray-800 rounded overflow-y-scroll scrollbar-hide">
			{postsData.map((post) => (
				<Post
					key={post.id}
					profilePic={post.data.profilePic}
					message={post.data.message}
					timestamp={post.data.timestamp}
					username={post.data.username}
					image={post.data.image}
				/>
			))}
		</div>
	);
};

export default Posts;
