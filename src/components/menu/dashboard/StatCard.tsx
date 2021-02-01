import React from 'react';
import clsx from 'clsx';
import {
	Card,
	CardContent,
	Grid,
	Typography,
	makeStyles,
} from '@material-ui/core';
import { IoCaretDown, IoCaretUp } from 'react-icons/io5';
import LineChart from '../../common/LineChart';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		width: 'auto',
		padding: theme.spacing(1),
	},
	content: {},
	chart: {},
}));

interface CardProps {
	name: string;
	stat: any;
	improved: boolean;
	change: number;
	chartData?: object;
	chartOptions?: object;
}

const StatCard = ({
	name,
	stat,
	improved,
	change,
	chartData,
	chartOptions,
}: CardProps) => {
	const classes = useStyles();

	return (
		<Card className={clsx(classes.root)} raised={true}>
			<div className={classes.chart}>
				<LineChart data={chartData} options={chartOptions} />
			</div>
			<CardContent className={classes.content}>
				<Grid
					container
					direction='column'
					justify='center'
					alignItems='center'
					spacing={1}
				>
					<Grid item>
						<Typography color='textSecondary' gutterBottom variant='button'>
							{name}
						</Typography>
					</Grid>
					<Grid item>
						<Typography color='textPrimary' variant='h4'>
							$ {stat}
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							variant='h6'
							style={improved ? { color: 'green' } : { color: 'red' }}
						>
							{improved ? <IoCaretUp /> : <IoCaretDown />} {change}%
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default StatCard;
