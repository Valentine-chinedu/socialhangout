import React from 'react';
import MessageForm from '../form/MessageForm';
import Header from '../navbar/Header';

import Posts from '../posts/Posts';

function Home() {
	return (
		<div className=' lg:w-full border-r border-l overflow-y-auto scrollbar-hide'>
			<Header />
			<MessageForm />
			<Posts />
		</div>
	);
}

export default Home;
