import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
	Card,
	CardContent,
	Grid,
	Typography,
	makeStyles,
} from '@material-ui/core';
import LineChart from '../../common/LineChart';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		width: 'auto',
		padding: 0,
		margin: 0,
	},
}));

const loadData = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	datasets: [
		{
			label: 'Debt',
			data: [55, 53, 47, 41, 44, 26],
			fill: false,
			backgroundColor: 'rgb(236, 116, 122, 0.1)',
			borderColor: '#ee757f',
		},
		{
			label: 'Savings',
			data: [33, 25, 35, 51, 54, 76],
			fill: false,
			borderColor: 'rgb(25, 198, 241)',
		},
	],
};

const loadOptions = {
	...{
		maintainAspectRatio: false,
		responsive: true,
		legend: {
			display: true,
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
				tension: 0.5,
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
			<CardContent style={{ margin: 0, padding: 0 }}>
				<Grid
					container
					direction='column'
					justify='center'
					alignItems='center'
					spacing={1}
				>
					<Grid item>
						<Typography color='textSecondary' gutterBottom variant='button'>
							Your Savings
						</Typography>
					</Grid>
					<Grid
						container
						direction='row'
						justify='center'
						alignItems='center'
						item
						xs={12}
					>
						<LineChart data={loadData} options={loadOptions} />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Savings;
