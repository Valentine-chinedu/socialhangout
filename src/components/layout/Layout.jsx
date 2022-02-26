import React from 'react';

import Home from '../home/Home';
import PostButton from '../posts/post/PostButton';

const Layout = () => {
	return (
		<div className='h-screen bg-primary text-primary relative md:flex justify-center w-full overflow-scroll md:overflow-hidden scrollbar-hide'>
			<Home />
			<PostButton />
		</div>
	);
};

export default Layout;
