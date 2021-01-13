import React from 'react';
import TransactionType from './TransactionType';
import Amount from './Amount';
import { Grid, Hidden, Typography, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Party from './Party';
import Date from './Date';
import { TiPlusOutline } from 'react-icons/ti';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
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
		<form noValidate autoComplete='off'>
			<Grid
				className={classes.root}
				container
				spacing={4}
				direction='column'
				justify='flex-start'
				alignItems='stretch'
			>
				<Grid item xs={12}>
					<Typography variant='h3'>Add a new Tally</Typography>
				</Grid>
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
