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
		width: '100%',
		marginTop: '1rem',
		padding: 0,
	},
	actionButton: {
		minWidth: '200px',
		minHeight: '70px',
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
			<Grid
				className={classes.root}
				container
				spacing={5}
				direction='column'
				justify='flex-start'
				alignItems='stretch'
			>
				<Grid item xs={10} sm={8} md={5} lg={3}>
					<TransactionType />
				</Grid>
				<Hidden mdDown>
					<Grid item md={6} lg={9}></Grid>
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
			</Grid>
		</form>
	);
};

export default NewTally;
