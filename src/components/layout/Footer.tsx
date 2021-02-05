import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../common/Copyright';

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: 'auto',
		padding: theme.spacing(2),
		height: '7rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-end',
		background: theme.palette.secondary.light,
		// background: `linear-gradient(45deg, ${theme.palette.secondary.light} 20%, ${theme.palette.secondary.main} 80%)`,
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Copyright />
		</div>
	);
};

export default Footer;
