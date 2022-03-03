import React from 'react';
import Feed from '../feed/Feed';
import SideBarLeft from '../navbar/SideBarLeft';
import SideBarRight from '../navbar/SideBarRight';

const Home = () => {
	return (
		<div className='flex justify-evenly w-full'>
			<SideBarLeft />
			<Feed />
			<SideBarRight />
		</div>
	);
};

export default Home;
