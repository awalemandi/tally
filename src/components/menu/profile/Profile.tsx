import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProfileCard from './AccountCard';
import AccountDetails from './AccountDetails';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
}));

const Profile = () => {
	const classes = useStyles();
	return (
		<Grid
			className={classes.root}
			container
			spacing={4}
			direction='column'
			justify='flex-start'
			alignItems='stretch'
		>
			<Grid item xs={12}>
				<Typography variant='h3'>Your Profile</Typography>
			</Grid>
			<Grid container item xs={12} spacing={4} justify='center' alignItems='center'>
				<Grid item  xs={12} sm={8} md={4}>
					<ProfileCard />
				</Grid>
				<Grid item  xs={12} sm={10} md={8}>
					<AccountDetails />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Profile;
