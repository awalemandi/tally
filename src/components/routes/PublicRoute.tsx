import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps, useRouteMatch } from 'react-router-dom';

import { RootState } from '../../redux/store';

interface Props extends RouteProps {
	component: any;
}

const PublicRoute: FC<Props> = ({ component: Component, ...rest }) => {
	let { url, path } = useRouteMatch();
	const { user, authenticated } = useSelector((state: RootState) => state.auth);

	return (
		<Route
			{...rest}
			render={props =>
				!authenticated ? (
					<Component {...props} />
				) : (
					<Redirect to={`/${user?.userName}`} />
				)
			}
		/>
	);
};

export default PublicRoute;
