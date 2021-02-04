import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Copyright from '../common/Copyright';

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: theme.spacing(3),
		height: '5rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-end',
		background: `linear-gradient(45deg, ${theme.palette.secondary.light} 20%, ${theme.palette.secondary.main} 80%)`,

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
