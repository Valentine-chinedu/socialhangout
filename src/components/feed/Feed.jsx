import React, { useContext } from 'react';
import { SideBarContext } from '../../contextProviders/SideBarProvider';
import MessageForm from '../form/MessageForm';
import Header from '../navbar/Header';

import Posts from '../posts/Posts';

function Home() {
	const { setShowSideBar } = useContext(SideBarContext);

	return (
		<div
			onClick={() => setShowSideBar(false)}
			className=' lg:w-full border-x  overflow-y-auto scrollbar-hide'
		>
			<Header />
			<MessageForm />
			<Posts />
		</div>
	);
}

export default Home;
