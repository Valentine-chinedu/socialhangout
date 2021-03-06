import React, { useEffect, useState } from 'react';

import { auth } from '../firebase.js';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [pending, setPending] = useState(null);

	const [useDemo, setUseDemo] = useState(false);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setPending(false);
		});
	}, []);

	if (pending) {
		return (
			<div className='w-full h-screen flex justify-center items-center'>
				Loading...
			</div>
		);
	}

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				setCurrentUser,
				useDemo,
				setUseDemo,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
