import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Banner from './Banner';
import Plans from './Plans';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	grid: {
		marginTop: theme.spacing(2)
	}
}));

const Premium = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant='h3'>Tally Premium</Typography>
			<Grid
				className={classes.grid}
				container
				spacing={4}
				direction='column'
				justify='flex-start'
				alignItems='stretch'
			>
				<Grid item xs={12}>
					<Banner />
					<Plans />
				</Grid>
			</Grid>
		</div>
	);
};

export default Premium;
