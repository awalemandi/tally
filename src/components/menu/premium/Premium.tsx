import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	}
}));

const Premium = () => {
	const classes = useStyles();
	return (
		<Grid
		className={classes.root}
				container
				spacing={4}
				direction='column'
				justify='flex-start'
				alignItems='stretch'>
					<Grid item xs={12}>
					<Typography variant='h3'>Join Premium for more features</Typography>
					</Grid>
					<Grid item xs={12}>

					</Grid>
					</Grid>
	);
};

export default Premium;
