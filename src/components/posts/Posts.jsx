// import axios from "../../axios";
import React, { useEffect, useState } from "react";
import db from "../../firebase";
import Post from "./post/Post";
// import Pusher from "pusher-js";

// import db from "../../firebase";

// const pusher = new Pusher("20e72a05f26b987781c2", {
// 	cluster: "us3",
// });

const Posts = () => {
	// eslint-disable-next-line no-unused-vars
	const [profilePic, setProfilePic] = useState("");
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

	// const syncFeed = () => {
	// 	axios.get("/retrieve/posts").then((res) => {
	// 		console.log(res.data);
	// 		setPostsData(res.data);
	// 	});
	// };

	// useEffect(() => {
	// 	const channel = pusher.subscribe("posts");
	// 	channel.bind("inserted", function (data) {
	// 		syncFeed();
	// 	});
	// }, []);

	// useEffect(() => {
	// 	syncFeed();
	// }, []);

	console.log(postsData);

	return (
		<div className="h-full z-50 w-full mt-4 lg:mt-4 md:mt-8 pt-8 lg:pt-10">
			{postsData.map((post) => (
				<Post
					key={post.id}
					avatar={post.data.profilePic}
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
