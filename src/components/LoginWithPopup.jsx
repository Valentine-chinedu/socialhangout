/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import { auth, provider } from "../firebase";
import { AuthContext } from "../contextProviders/Auth";

const LoginWithPopup = () => {
	const { setCurrentUser } = useContext(AuthContext);

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				console.log(result);

				setCurrentUser(result.user);
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className="">
			<button type="submit" onClick={signIn}>
				Login with Google
			</button>
		</div>
	);
};

export default LoginWithPopup;
