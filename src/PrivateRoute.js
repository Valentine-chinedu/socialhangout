import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './contextProviders/Auth';
// import { DemoContext } from './contextProviders/DemoProvider';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
	const { currentUser, useDemo } = useContext(AuthContext);

	return (
		<Route
			{...rest}
			render={(routeProps) =>
				!!currentUser || useDemo ? (
					<RouteComponent {...routeProps} />
				) : (
					<Redirect to={'/login'} />
				)
			}
		/>
	);
};

export default PrivateRoute;
