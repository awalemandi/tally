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
	root: {
		width: '70%',
		height: 'auto',
		marginTop: theme.spacing(4),
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
			width: '70%'
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
			<div className={classes.root}>
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
			{/* <Grid
				className={classes.root}
				container
				spacing={5}
				direction='column'
				justify='center'
				alignItems='center'
			>
				<Grid item xs={10} sm={8} md={5} >
					<TransactionType />
				</Grid>
				<Hidden mdDown>
					<Grid item md={6} ></Grid>
				</Hidden>
				<Grid item xs={10} sm={8} md={5} lg={3}>
					<Amount />
				</Grid>
				<Hidden mdDown>
					<Grid item md={6} lg={9}></Grid>
				</Hidden>
				<Grid item xs={10} sm={8} md={5} lg={3}>
					<Reason />
				</Grid>
				<Hidden mdDown>
					<Grid item md={6} lg={9}></Grid>
				</Hidden>
				<Grid item xs={10} sm={8} md={5} lg={3}>
					<Party />
				</Grid>
				<Hidden mdDown>
					<Grid item md={6} lg={9}></Grid>
				</Hidden>
				<Grid item xs={10} sm={8} md={5} lg={3}>
					<Date />
				</Grid>
				<Hidden mdDown>
					<Grid item md={6} lg={9}></Grid>
				</Hidden>
				<Grid item xs={10} sm={8} md={5} lg={3}>
					<Category />
				</Grid>
				<Hidden mdDown>
					<Grid item md={6} lg={9}></Grid>
				</Hidden>
				<Grid item xs={10} sm={8} md={5} lg={3}>
					<Fab
						variant='extended'
						color='primary'
						className={classes.actionButton}
					>
						<TiPlusOutline className={classes.icon} />
						Add Tally
					</Fab>
				</Grid>
				<Hidden mdDown>
					<Grid item md={6} lg={9}></Grid>
				</Hidden>
			</Grid> */}
		</form>
	);
};

export default NewTally;
