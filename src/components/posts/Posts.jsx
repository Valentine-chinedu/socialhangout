import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import Post from './post/Post';

const Posts = () => {
	const [postsData, setPostsData] = useState([]);

	useEffect(() => {
		db.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				setPostsData(
					snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
				)
			);
	}, []);

	console.log(postsData);

	return (
		<div className='h-full w-full'>
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
