import React from 'react';
import clsx from 'clsx';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import RadarChart from '../../common/RadarChart';
import { Divider } from '@material-ui/core';

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
	labels: ['Family', 'Friends', 'Business', 'Credit Card', 'Education', 'Mortgage'],
	datasets: [
		{
			borderWidth: 1,
			borderColor: 'rgb(236, 192, 111)',
			backgroundColor: 'rgb(236, 192, 111, 0.5)',
			data: [32, 44, 67, 36, 55, 92],
		},
	],
};

const loadOptions = {
	...{
		responsive: true,
		maintainAspectRatio: true,
		scale: {
			ticks: {
				beginAtZero: true,
				display: false,
				stepSize: 20,
			},
			pointLabels: {
				fontSize: 12,
			},
		},
		elements: {
			line: {
				tension: 0.33,
			},
		},
		legend: {
			position: 'left',
			display: false,
		},
	},
};

const DebtByCategory = () => {
	const classes = useStyles();

	return (
		<Card className={clsx(classes.root)} raised={true}>
			<CardContent className={classes.content}>
				<Typography color='textSecondary' gutterBottom variant='button'>
					Your Debt by Category
				</Typography>
				<Divider variant='fullWidth' />
			</CardContent>
			<div className={classes.chart}>
				<RadarChart data={loadData} options={loadOptions} />
			</div>
		</Card>
	);
};

export default DebtByCategory;
