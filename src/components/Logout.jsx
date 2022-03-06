import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contextProviders/Auth';
import { auth } from '../firebase';

const Logout = () => {
	const { currentUser, useDemo, setUseDemo } = useContext(AuthContext);

	console.log(useDemo);
	console.log(currentUser);

	// const history = useHistory();

	// const signOut = () => {
	// 	history.push('/login');
	// };
	return (
		<div className='flex justify-center lg:justify-end pb-3 w-full lg:pr-5'>
			{useDemo ? (
				<button
					onClick={() => {
						setUseDemo(false);
					}}
					className='flex items-center p-1.5 rounded-full hover:bg-gray-300'
				>
					<img
						src='./blank-profile-picture.png'
						alt='avatar'
						loading='lazy'
						className='rounded-full h-10 mr-4'
					/>

					<div className='lg:mr-6 text-sm hidden lg:block'>
						<h2 className=' font-medium'>name not available</h2>
						<h3>Signin</h3>
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
			) : (
				<button
					className='flex items-center p-1.5 rounded-full hover:bg-gray-100'
					onClick={() => auth.signOut()}
				>
					<img
						src={
							!currentUser || useDemo
								? './blank-profile-picture.png'
								: currentUser.photoURL
						}
						alt='avatar'
						loading='lazy'
						className='rounded-full h-10 mr-4'
					/>

					<div className='lg:mr-6 text-sm hidden lg:block'>
						<h2 className=' font-medium'>{currentUser.displayName}</h2>
						<h3>Signout</h3>
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
			)}
		</div>
	);
};

export default Logout;
