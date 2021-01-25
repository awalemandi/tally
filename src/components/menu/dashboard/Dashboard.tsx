import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';

import Savings from './Savings';
import Performance from './Performace';
import StatCard from './StatCard';
import DebtByCategory from './DebtByCategory';

const useStyles = makeStyles(theme => ({
	root: {
		padding: 0,
	},
}));

const Dashboard = () => {
	const classes = useStyles();

	return (
		<Grid
			className={classes.root}
			container
			spacing={5}
			direction='column'
			justify='flex-start'
			alignItems='stretch'
		>
			<Grid item xs={12}>
				<Typography variant='h3'>Dashboard</Typography>
			</Grid>
			<Grid container item spacing={3}>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<StatCard
						name='total debt'
						stat='23,000'
						improved={false}
						change={12.4}
					/>
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<StatCard
						name='total debt'
						stat='23,789'
						improved={false}
						change={12.4}
					/>
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<Savings />
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<StatCard
						name='total debt'
						stat='5,548'
						improved={false}
						change={12.4}
					/>
				</Grid>
				<Grid item lg={8} md={12} xl={9} xs={12}>
					<Performance />
				</Grid>
				<Grid item lg={4} md={6} xl={3} xs={12}>
					<DebtByCategory />
				</Grid>
				<Grid item lg={4} md={6} xl={3} xs={12}>
					<StatCard
						name='total debt'
						stat='23,000'
						improved={true}
						change={12.4}
					/>
				</Grid>
				<Grid item lg={8} md={12} xl={9} xs={12}>
					<StatCard
						name='total debt'
						stat='23,000'
						improved={true}
						change={12.4}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Dashboard;
