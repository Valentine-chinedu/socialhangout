import React, { useContext } from 'react';
import { AuthContext } from '../contextProviders/Auth';
import { auth } from '../firebase';

const Logout = () => {
	const { currentUser } = useContext(AuthContext);

	const { photoURL } = currentUser;
	return (
		<div className='flex justify-center lg:justify-end pb-3 w-full lg:pr-5'>
			<button
				className='flex items-center p-1.5 rounded-full hover:bg-gray-100'
				onClick={() => auth.signOut()}
			>
				<img
					src={photoURL ? photoURL : './blank-profile-picture.png'}
					alt='avatar'
					loading='lazy'
					className='rounded-full h-10 mr-4'
				/>

				<div className='lg:mr-6 text-sm hidden lg:block'>
					<h2 className=' font-medium'>{currentUser.displayName}</h2>
					<h3>Logout</h3>
				</div>
				<svg
					viewBox='0 0 24 24'
					aria-hidden='true'
					className='h-4 hidden lg:block'
				>
					<g>
						<circle cx='5' cy='12' r='2'></circle>
						<circle cx='12' cy='12' r='2'></circle>
						<circle cx='19' cy='12' r='2'></circle>
					</g>
				</svg>
			</button>
		</div>
	);
};

export default Logout;
