import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { RiArrowGoBackLine } from 'react-icons/ri';

const NoMatch = () => {
	let location = useLocation();

	return (
		<div style={{ marginTop: '10%', marginLeft: '20%' }}>
			<Typography variant='h2' color='primary' style={{ marginTop: 5 }}>
				Oops! Page not found.
			</Typography>
			<Typography variant='h4' color='inherit' style={{ marginTop: 5 }}>
				<code>{location.pathname}</code>
			</Typography>
			<Typography variant='subtitle1' style={{ marginTop: 5 }}>
				The page you're looking for doesn't seem to exist.
			</Typography>
			<Link to='/' style={{ textDecoration: 'none' }}>
				<Button
					color='primary'
					variant='outlined'
					size='large'
					startIcon={<RiArrowGoBackLine />}
					style={{ marginTop: 10 }}
				>
					Go Back
				</Button>
			</Link>
		</div>
	);
};

export default NoMatch;
