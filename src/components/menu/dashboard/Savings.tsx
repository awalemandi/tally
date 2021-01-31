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

type CardProps = {
	name: string;
	stat: any;
	improved: boolean;
	change: number;
};

const Savings = () => {
	const classes = useStyles();

	return (
		<Card className={clsx(classes.root)} raised={true}>
			<CardContent style={{margin: 0, padding: 0}}>
				<Grid
					container
					direction='row'
					justify='center'
					alignItems='center'
					
				>
					<Grid item xs={12}>
						<LineChart />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Savings;
