import React from 'react';
import clsx from 'clsx';
import {
	Card,
	CardContent,
	Grid,
	Typography,
	makeStyles,
} from '@material-ui/core';
import BarChart from '../../common/BarChart';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		width: 'auto',
		padding: theme.spacing(2),
		margin: 0,
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
			label: 'Net Worth',
			backgroundColor: '#16e6a7',
			borderColor: 'rgba(0,0,0,1)',
			borderWidth: 2,
			data: [6500, 5900, 5000, 6000, 5600, -3000, -4200, 2000],
		},
	],
};

const loadOptions = {
	...{
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			position: 'top',
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
			<CardContent style={{ margin: 0, padding: 0 }}>
				<Grid container direction='column' justify='center' alignItems='center'>
					<Grid item>
						<Typography color='textSecondary' gutterBottom variant='button'>
							Performance
						</Typography>
					</Grid>
					<Grid
						container
						direction='row'
						justify='center'
						alignItems='center'
						item
						xs={12}
						style={{ maxWidth: '80%' }}
					>
						<BarChart data={loadData} options={loadOptions} />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Performance;
