import React from 'react';
import clsx from 'clsx';
import {
	Card,
	CardContent,
	Grid,
	Typography,
	makeStyles,
	Divider,
} from '@material-ui/core';
import DoughnutChart from '../../common/charts/DoughnutChart';
import { Doughnut } from 'react-chartjs-2';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		width: 'auto',
		margin: 0,
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	content: {
		width: '100%',
		textAlign: 'center',
		margin: 0,
		padding: 0,
	},
	chart: {
		width: '100%',
		height: '100%',
		marginTop: theme.spacing(2),
		padding: 0,
	},
}));

const loadData = {
	datasets: [
		{
			data: [63, 37],
			backgroundColor: ['rgb(108, 180, 108, 0.7)', 'rgb(255, 99, 132, 0.7)'],
			hoverBackgroundColor: [
				'rgb(108, 180, 108)',
				'rgb(255, 99, 132)',
				// 'rgb(255, 206, 86)',
			],
			borderWidth: 1,
		},
	],
	labels: ['You\'re Owed', 'You Owe'],
};

const loadOptions = {
	...{
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			position: 'bottom',
			labels: {
				padding: 25,
				boxWidth: 20,
			},
		},
		cutoutPercentage: 65,
		tooltips: {
			custom: false,
			mode: 'index',
			position: 'nearest',
		},
	},
};

const DebitCreditRatio = () => {
	const classes = useStyles();

	return (
		<Card className={clsx(classes.root)} raised={true}>
			<CardContent className={classes.content}>
				<Typography color='textSecondary' gutterBottom variant='button'>
					Debit to Credit Ratio
				</Typography>
				<Divider variant='fullWidth' />
			</CardContent>
			<div className={classes.chart}>
				<DoughnutChart data={loadData} options={loadOptions} />
			</div>
		</Card>
	);
};

export default DebitCreditRatio;
