import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProfileCard from './AccountCard';
import AccountDetails from './AccountDetails';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	grid: {
		marginTop: theme.spacing(2)
	}
}));

const Profile = () => {
	const classes = useStyles();
	return (
		<div 				className={classes.root}>
			<Typography variant='h3'>Profile</Typography>
			<Grid
				container
				className={classes.grid}
				spacing={4}
				justify='center'
				alignItems='center'
			>
				<Grid item xs={12} sm={8} md={4}>
					<ProfileCard />
				</Grid>
				<Grid item xs={12} sm={10} md={8}>
					<AccountDetails />
				</Grid>
			</Grid>
		</div>
	);
};

export default Profile;
