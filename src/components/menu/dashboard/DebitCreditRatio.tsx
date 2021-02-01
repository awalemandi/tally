import React from 'react';
import clsx from 'clsx';
import {
	Card,
	CardContent,
	Grid,
	Typography,
	makeStyles,
} from '@material-ui/core';
import DoughnutChart from '../../common/DoughnutChart';
import { Doughnut } from 'react-chartjs-2';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		width: 'auto',
		margin: 0,
		padding: 0,
	},
}));

const loadData = {
	datasets: [
		{
			data: [63, 37],
			backgroundColor: ['rgb(114, 224, 182, 0.8)', 'rgb(255, 99, 132, 0.8)'],
			hoverBackgroundColor: [
				'rgb(114, 224, 182)',
				'rgb(255, 99, 132)',
				// 'rgb(255, 206, 86)',
			],
			borderWidth: 1,
		},
	],
	labels: ['Credit', 'Debit'],
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
		cutoutPercentage: 70,
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
			<CardContent style={{ margin: 0, padding: 0 }}>
				<Grid
					container
					direction='column'
					justify='center'
					alignItems='center'
					spacing={1}
				>
					<Grid item xs={12}>
						<Typography color='textSecondary' gutterBottom variant='button'>
							Debit to Credit Ratio
						</Typography>
					</Grid>
					<Grid
						container
						direction='row'
						justify='center'
						alignItems='center'
						item
						xs={12}
						style={{ height: '100%' }}
					>
						<DoughnutChart data={loadData} options={loadOptions} />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default DebitCreditRatio;
