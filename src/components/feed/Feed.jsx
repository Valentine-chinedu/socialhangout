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
			className='relative lg:mr-8  w-full lg:w-[50%] lg:border-r lg:border-l border-primary overflow-y-scroll scrollbar-hide'
		>
			<Header />
			<MessageForm />
			<Posts />
		</div>
	);
}

export default Home;
