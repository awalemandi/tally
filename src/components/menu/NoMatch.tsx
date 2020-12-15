import React from 'react';
import { useLocation } from 'react-router-dom';

const NoMatch = () => {
	let location = useLocation();

	return (
		<div>
			<h2>Oops! Page not found.</h2>
			<h3>
				<code>{location.pathname}</code>
			</h3>
			<p>The page you're looking for doesn't seem to exist.</p>
		</div>
	);
};

export default NoMatch;
