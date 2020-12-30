import React from 'react';
import TransactionType from './TransactionType';
import Amount from './Amount';
import { Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Party from './Party';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		// display: 'flex',
		// flexDirection: 'column',
		// justifyContent: 'space-between',
	},
}));

const NewTally = () => {
	const classes = useStyles();
	return (
		<form noValidate autoComplete='off'>
			<Grid
				className={classes.root}
				container
				spacing={4}
				direction='column'
				justify='flex-start'
				alignItems='stretch'
			>
				<Grid item xs={12}>
					<Typography variant='h3'>Add a new Tally</Typography>
				</Grid>
				<Grid item xs={10} sm={8} md={5} lg={3}>
					<TransactionType />
				</Grid>
				<Hidden mdDown>
					<Grid item md={6} lg={9}></Grid>
				</Hidden>
				<Grid item xs={10} sm={8} md={5} lg={3}>
					<Amount />
				</Grid>
				<Hidden mdDown>
					<Grid item md={6} lg={9}></Grid>
				</Hidden>
				<Grid item xs={10} sm={8} md={5} lg={3}>
					<Party />
				</Grid>
				<Hidden mdDown>
					<Grid item md={6} lg={9}></Grid>
				</Hidden>
			</Grid>
		</form>
	);
};

export default NewTally;
