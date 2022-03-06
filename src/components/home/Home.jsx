import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contextProviders/Auth';
import Feed from '../feed/Feed';
import SideBarLeft from '../navbar/SideBarLeft';
import SideBarRight from '../navbar/SideBarRight';

const Home = () => {
	const { useDemo } = useContext(AuthContext);

	useEffect(() => {
		if (useDemo) {
			alert('sign in to tweet and view profie pics');
		}
	});

	return (
		<div className='flex h-screen justify-evenly w-full'>
			<SideBarLeft />
			<Feed />
			<SideBarRight />
		</div>
	);
};

export default Home;
