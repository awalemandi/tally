import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';

import Savings from './Savings';
import Performance from './Performace';
import StatCard from './StatCard';
import DebtByCategory from './DebtByCategory';
import DebitCreditRatio from './DebitCreditRatio';

const useStyles = makeStyles(theme => ({
	root: {
		padding: 0,
	},
}));

const outstandingAmountData = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	datasets: [
		{
			label: 'Outstanding',
			data: [34, 44, 30, 47, 41, 40, 34],
			fill: true,
			backgroundColor: 'rgb(171, 215, 245, 0.3)',
			borderColor: 'rgb(107, 221, 236)',
		},
	],
};

const totalDebtData = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	datasets: [
		{
			label: 'Debt',
			data: [34, 44, 30, 47, 41, 40, 34],
			fill: true,
			backgroundColor: 'rgb(236, 116, 122, 0.1)',
			borderColor: '#ee757f',
		},
	],
};

const loadOptions = {
	...{
		maintainAspectRatio: false,
		responsive: true,
		legend: {
			display: false,
			position: 'bottom',
			labels: {
				padding: 25,
				boxWidth: 20,
			},
		},
		tooltips: {
			enabled: false,
			custom: false,
		},
		elements: {
			point: {
				radius: 0,
			},
			line: {
				tension: 0.33,
			},
		},
		scales: {
			xAxes: [
				{
					gridLines: false,
					ticks: {
						display: false,
					},
				},
			],
			yAxes: [
				{
					gridLines: false,
					scaleLabel: false,
					ticks: {
						display: false,
						isplay: false,
					},
				},
			],
		},
	},
};

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
						chartData={totalDebtData}
						chartOptions={loadOptions}
					/>
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<DebitCreditRatio />
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
						chartData={outstandingAmountData}
						chartOptions={loadOptions}
					/>
				</Grid>
				<Grid item lg={7} md={12} xl={8} xs={12}>
					<Performance />
				</Grid>
				<Grid item lg={5} md={6} xl={4} xs={12}>
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
