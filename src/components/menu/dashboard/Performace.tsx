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
import BarChart from '../../common/BarChart';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		width: 'auto',
		padding: theme.spacing(1),
	},
}));

type CardProps = {
	name: string;
	stat: any;
	improved: boolean;
	change: number;
};

const Performance = () => {
	const classes = useStyles();

	return (
		<Card className={clsx(classes.root)} raised={true}>
			<CardContent>
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
					<Grid item>
						<BarChart />
					</Grid>
					<Grid item>
						<Typography variant='h6'></Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Performance;
