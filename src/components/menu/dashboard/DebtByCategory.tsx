import React from 'react';
import clsx from 'clsx';
import { Card, CardContent, Typography, makeStyles, Divider } from '@material-ui/core';
import RadarChart from '../../common/charts/RadarChart';
import { debtByCategoryData, radarOptions} from './chartData';

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
				<RadarChart data={debtByCategoryData} options={radarOptions} />
			</div>
		</Card>
	);
};

export default DebtByCategory;
