import React from 'react';
import clsx from 'clsx';
import {
	Card,
	CardContent,
	Grid,
	Typography,
	makeStyles,
} from '@material-ui/core';
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
	labels: ['Family', 'Friends', 'Credit Card', 'Education', 'Mortgage'],
	datasets: [
		{
			backgroundColor: 'rgb(250, 97, 110, 0.5)',
			data: [20, 15, 36, 55, 87],
		},
	],
};

const loadOptions = {
	...{
		responsive: true,
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
				tension: 0.2,
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
					Debit to Credit Ratio
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
