import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
	Avatar,
	Card,
	CardContent,
	Grid,
	Typography,
	makeStyles,
	colors,
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {IoCaretDown, IoCaretUp} from 'react-icons/io5';

const useStyles = makeStyles((theme)=> ({
	root: {
		height: '100%',
		width: 'auto',
		padding: theme.spacing(1)
	},
}));

const TotalDebt = () => {
	const classes = useStyles();

	return (
		<Card className={clsx(classes.root)}>
			<CardContent>
				<Grid container direction='column' justify='center' alignItems='center' spacing={1}>
					<Grid item>
						<Typography color='textSecondary' gutterBottom variant='button'>
							TOTAL DEBT
						</Typography>
						</Grid>
						<Grid item>
						<Typography color='textPrimary' variant='h4'>
							$23,200
						</Typography>
					</Grid>
					<Grid item>
						
						<Typography variant='h6'color='primary'>
						<IoCaretDown /> 12.5%
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

TotalDebt.propTypes = {
	className: PropTypes.string,
};

export default TotalDebt;
