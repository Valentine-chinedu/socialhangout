import React from 'react';

import Home from '../home/Home';

const Layout = () => {
	return (
		<div className='h-screen bg-primary text-primary relative md:flex justify-center w-full overflow-scroll md:overflow-hidden scrollbar-hide'>
			<Home />
		</div>
	);
};

export default Layout;
