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

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		width: 'auto',
		margin: 0,
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
							Debt By Category
						</Typography>
					</Grid>
					<Grid
						container
						direction='row'
						justify='center'
						alignItems='center'
						item
						xs={12}
						style={{ maxHeight: '80%' }}
					>
						<RadarChart data={loadData} options={loadOptions} />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default DebtByCategory;
