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
import { IoCaretDown, IoCaretUp } from 'react-icons/io5';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		width: 'auto',
		padding: theme.spacing(1),
	},
}));

type CardProps = {
	name: string,
	stat: any,
	improved: boolean,
	change: number
  }

const StatCard = ({name, stat, improved, change}: CardProps) => {
	const classes = useStyles();

	return (
		<Card className={clsx(classes.root)}>
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
							{name}
						</Typography>
					</Grid>
					<Grid item>
						<Typography color='textPrimary' variant='h4'>
							{stat}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='h6' style={improved ? {color: 'green'} : {color: 'red'}}>
							{improved ? <IoCaretUp /> : <IoCaretDown />} {change}%
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default StatCard;
