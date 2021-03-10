import React, { useState, useEffect } from "react";
import * as api from "../api/index";

export const PostsContext = React.createContext();

const PostsProvider = (props) => {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		try {
			const { data } = await api.fetchPosts();
			setPosts(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPosts();
	}, []);

	console.log(posts);

	return (
		<PostsContext.Provider
			value={{
				posts,
			}}
		>
			{props.children}
		</PostsContext.Provider>
	);
};

export default PostsProvider;
