import axios from "../../axios";
import React, { useEffect, useState } from "react";
import Post from "./post/Post";

// import db from "../../firebase";

const Posts = () => {
	// eslint-disable-next-line no-unused-vars
	const [profilePic, setProfilePic] = useState("");
	const [postsData, setPostsData] = useState([]);

	// useEffect(() => {
	// 	db.collection("posts")
	// 		.orderBy("timestamp", "desc")
	// 		.onSnapshot((snapshot) =>
	// 			setPostsData(
	// 				snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
	// 			)
	// 		);
	// }, []);

	const syncFeed = () => {
		axios.get("/retrieve/posts").then((res) => {
			console.log(res.data);
			setPostsData(res.data);
		});
	};

	useEffect(() => {
		syncFeed();
	}, []);

	console.log(postsData);

	return (
		<div className="h-full w-full lg:mt-4 md:mt-16 pt-8 lg:pt-0 rounded">
			{postsData.map((post) => (
				<Post
					key={post.id}
					avatar={post.avatar}
					message={post.message}
					timestamp={post.timestamp}
					username={post.user}
					imgName={post.imgName}
				/>
			))}
		</div>
	);
};

export default Posts;
