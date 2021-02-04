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
import { performanceData, barOptions } from './chartData';

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
				<BarChart data={performanceData} options={barOptions} />
			</div>
		</Card>
	);
};

export default Performance;
