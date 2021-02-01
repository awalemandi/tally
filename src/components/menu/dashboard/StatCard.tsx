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
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	content: {
		position: 'absolute',
		zIndex: 1,
		backgroundColor: 'transparent',
		textAlign: 'center',
	},
	chart: {
		position: 'relative',
		zIndex: 0,
		width: '100%',
		height: '100%',
		margin: 0,
		padding: 0,
	},
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
			<CardContent className={classes.content}>
				<Typography color='textSecondary' gutterBottom variant='button'>
					{name}
				</Typography>

				<Typography color='textPrimary' variant='h4'>
					$ {stat}
				</Typography>

				<Typography
					variant='h6'
					style={improved ? { color: 'green' } : { color: 'red' }}
				>
					{improved ? <IoCaretUp /> : <IoCaretDown />} {change}%
				</Typography>
			</CardContent>
			<div className={classes.chart}>
				<LineChart data={chartData} options={chartOptions} />
			</div>
		</Card>
	);
};

export default StatCard;
