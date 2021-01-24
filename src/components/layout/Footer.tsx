import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Copyright from '../Copyright';

const useStyles = makeStyles(theme => ({
	root: {
		height: '3rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<Container className={classes.root}>
			<Copyright />
		</Container>
	);
};

export default Footer;
