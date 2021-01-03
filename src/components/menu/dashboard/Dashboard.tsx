import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import TotalDebt from './TotalDebt';
import DebtByCategory from './DebtByCategory';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
}));

const Dashboard = () => {
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
				<Typography variant='h3'>Dashboard</Typography>
			</Grid>
			<Grid container item spacing={3}>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<TotalDebt />
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<TotalDebt />
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<TotalDebt />
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<TotalDebt />
				</Grid>
				<Grid item lg={8} md={12} xl={9} xs={12}>
					<TotalDebt />
				</Grid>
				<Grid item lg={4} md={6} xl={3} xs={12}>
					<DebtByCategory />
				</Grid>
				<Grid item lg={4} md={6} xl={3} xs={12}>
					<TotalDebt />
				</Grid>
				<Grid item lg={8} md={12} xl={9} xs={12}>
					<TotalDebt />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Dashboard;
