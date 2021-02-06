import React from 'react';
import TransactionType from './TransactionType';
import Amount from './Amount';
import Reason from './Reason';
import { Grid, Hidden, Typography, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Party from './Party';
import Date from './Date';
import { TiPlusOutline } from 'react-icons/ti';
import Category from './Category';

const useStyles = makeStyles(theme => ({
	form: {

	},
	inputContainer: {
		width: '70%',
		height: 'auto',
		marginTop: theme.spacing(4),
		padding: theme.spacing(4, 2),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('lg')]: {
			width: '90%'
		},
		[theme.breakpoints.down('sm')]: {
			width: '100%'
		},
	},
	inputWrapper: {
		textAlign: 'left',
		width: '25%',
		marginBottom: theme.spacing(1),
		padding: theme.spacing(1),
		[theme.breakpoints.down('lg')]: {
			width: '35%'
		},
		[theme.breakpoints.down('md')]: {
			width: '30%'
		},
		[theme.breakpoints.down('sm')]: {
			width: '40%'
		},
		[theme.breakpoints.down('xs')]: {
			width: '80%'
		}
	},
	actionButton: {
		marginTop: theme.spacing(2),
		minWidth: 200,
		minHeight: 70,
	},
	icon: {
		marginRight: theme.spacing(1),
	},
}));

const NewTally = () => {
	const classes = useStyles();
	return (
		<form noValidate autoComplete='off' className={classes.form}>
			<Typography variant='h3'>Add a new Tally</Typography>
			<div className={classes.inputContainer}>
				<div className={classes.inputWrapper}>
					<TransactionType />
				</div>
				<div className={classes.inputWrapper}>
					<Amount />
				</div>
				<div className={classes.inputWrapper}>
					<Reason />
				</div>
				<div className={classes.inputWrapper}>
					<Party />
				</div>
				<div className={classes.inputWrapper}>
					<Date />
				</div>
				<div className={classes.inputWrapper}>
					<Category />
				</div>
				<Fab
					variant='extended'
					color='primary'
					className={classes.actionButton}
				>
					<TiPlusOutline className={classes.icon} />
					Add Tally
				</Fab>
			</div>
		</form>
	);
};

export default NewTally;
