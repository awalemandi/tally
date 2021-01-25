import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Copyright from '../common/Copyright';

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: '3rem',
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
