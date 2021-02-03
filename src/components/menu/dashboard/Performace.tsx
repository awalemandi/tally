import React from 'react';
import clsx from 'clsx';
import {
	Card,
	CardContent,
	Typography,
	makeStyles,
	Divider,
} from '@material-ui/core';
import BarChart from '../../common/charts/BarChart';

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
	labels: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
	],
	datasets: [
		{
			label: 'Amount',
			backgroundColor: 'rgb(22, 135, 167, 0.4)',
			borderColor: 'rgba(0,0,0,1, 0.2)',
			borderWidth: 1,
			maxBarThickness: 35,
			data: [6500, 5900, 5000, 6000, 5600, -3000, -4200, 2000],
		},
	],
};

const loadOptions = {
	...{
		responsive: true,
		maintainAspectRatio: true,
		barThickness: 100,
		legend: {
			position: 'top',
			labels: {
				padding: 25,
				boxWidth: 20,
			},
		},
		elements: {
			line: {
				// A higher value makes the line look skewed at this ratio.
				tension: 0.3,
			},
			point: {
				radius: 0,
			},
		},
		scales: {
			xAxes: [
				{
					gridLines: false,
					ticks: {
						callback(tick: any, index: number) {
							// Jump every 7 values on the X axis labels to avoid clutter.
							return index % 7 !== 0 ? '' : tick;
						},
					},
				},
			],
			yAxes: [
				{
					ticks: {
						suggestedMax: 45,
						callback(tick: number) {
							if (tick === 0) {
								return tick;
							}
							// Format the amounts using Ks for thousands.
							return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
						},
					},
				},
			],
		},
		hover: {
			mode: 'nearest',
			intersect: false,
		},
		tooltips: {
			custom: false,
			mode: 'nearest',
			intersect: false,
		},
	},
};

const Performance = () => {
	const classes = useStyles();

	return (
		<Card className={clsx(classes.root)} raised={true}>
			<CardContent className={classes.content}>
				<Typography color='textSecondary' gutterBottom variant='button'>
					Past Performance
				</Typography>
				<Divider variant='fullWidth' />
			</CardContent>
			<div className={classes.chart}>
				<BarChart data={loadData} options={loadOptions} />
			</div>
		</Card>
	);
};

export default Performance;
