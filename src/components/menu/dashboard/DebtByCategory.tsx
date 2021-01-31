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

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		width: 'auto',
		padding: theme.spacing(2),
		margin: 0,
	},
}));

const loadData = {
	datasets: [
		{
			data: [63, 15, 22],
			backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
			hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
			borderWidth: 8,
		},
	],
	labels: ['Family', 'Friends', 'Bank'],
};

const loadOptions = {
	...{
		responsive: true,
		
		legend: {
			position: 'bottom',
			labels: {
				padding: 25,
				boxWidth: 20,
			},
		},
		cutoutPercentage: 0,
		tooltips: {
			custom: false,
			mode: 'index',
			position: 'nearest',
		},
	},
};

const DebtByCategory = () => {
	const classes = useStyles();

	return (
		<Card className={clsx(classes.root)} raised={true}>
			<CardContent style={{ margin: 0, padding: 0 }}>
				<Grid container direction='column' justify='center' alignItems='center'>
					<Grid item>
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
						style={{ maxWidth: '70%' }}
					>
						<DoughnutChart data={loadData} options={loadOptions} />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default DebtByCategory;
