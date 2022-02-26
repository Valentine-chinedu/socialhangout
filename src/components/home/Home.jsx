import React from 'react';
import Feed from '../feed/Feed';

import Profile from '../profile/Profile';

const Home = () => {
	return (
		<div className='flex'>
			<Feed />
			<Profile />
		</div>
	);
};

export default Home;
