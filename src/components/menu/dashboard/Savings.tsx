import React from 'react';
import clsx from 'clsx';
import {
	Card,
	CardContent,
	Typography,
	makeStyles,
	Divider,
} from '@material-ui/core';
import LineChart from '../../common/LineChart';

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
	labels: ['Jan', 'Feb', 'Mar', 'Apr'],
	datasets: [
		{
			label: 'Borrowed',
			data: [108, 72, 97, 53],
			fill: true,
			backgroundColor: 'rgb(251, 130, 48, 0.1)',
			borderColor: 'rgb(241, 168, 119)',
			borderWidth: 1,
		},
		{
			label: 'Lent',
			data: [66, 64, 84, 92],
			fill: true,
			borderColor: 'rgb(224, 132, 233)',
			borderWidth: 1,
		},
	],
};

const loadOptions = {
	...{
		maintainAspectRatio: false,
		responsive: true,
		legend: {
			display: true,
			position: 'top',
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

const Savings = () => {
	const classes = useStyles();

	return (
		<Card className={clsx(classes.root)} raised={true}>
			<CardContent className={classes.content}>
				<Typography color='textSecondary' gutterBottom variant='button'>
					Your Trend
				</Typography>
				<Divider variant='fullWidth' />
			</CardContent>
			<div className={classes.chart}>
				<LineChart data={loadData} options={loadOptions} />
			</div>
		</Card>
	);
};

export default Savings;
