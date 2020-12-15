import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import TotalDebt from './TotalDebt';
import DebtByCategory from './DebtByCategory';

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: '100%',
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3),
	},
}));

const Dashboard = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth={false}>
				<Grid container spacing={3}>
					<Grid item lg={3} sm={6} xl={3} xs={12}>
						<TotalDebt />
					</Grid>
					<Grid item lg={3} sm={6} xl={3} xs={12}>
						<TotalDebt />
					</Grid>
					<Grid item lg={3} sm={6} xl={3} xs={12}>
						<TotalDebt />
					</Grid>
					<Grid item lg={3} sm={6} xl={3} xs={12}>
						<TotalDebt />
					</Grid>
					<Grid item lg={8} md={12} xl={9} xs={12}>
						<TotalDebt />
					</Grid>
					<Grid item lg={4} md={6} xl={3} xs={12}>
						<DebtByCategory />
					</Grid>
					<Grid item lg={4} md={6} xl={3} xs={12}>
						<TotalDebt />
					</Grid>
					<Grid item lg={8} md={12} xl={9} xs={12}>
						<TotalDebt />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Dashboard;
