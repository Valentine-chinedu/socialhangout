import React, { useEffect, useState } from "react";
import { auth } from "../firebase.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [pending, setPending] = useState(true);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		});
	}, []);

	if (pending) {
		return (
			<div className="w-full h-screen flex justify-center items-center">
				Loading...
			</div>
		);
	}

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				setCurrentUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
