import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AlertMessage from '../../common/AlertMessage';
import { setSuccess } from '../../../redux/actions/authActions';
import { RootState } from '../../../redux/store';

import { Typography, Grid, makeStyles } from '@material-ui/core';

import Savings from './Savings';
import Performance from './Performace';
import StatCard from './StatCard';
import DebtByCategory from './DebtByCategory';
import DebitCreditRatio from './DebitCreditRatio';
import {
	outstandingAmountData,
	totalDebtData,
	statCardOptions,
} from './chartData';

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: '1rem',
		padding: 0,
	},
}));

const Dashboard: FC = () => {
	const classes = useStyles();

	//auth
	const { user, needVerification, success } = useSelector(
		(state: RootState) => state.auth
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (success) {
			dispatch(setSuccess(''));
		}
	}, [success, dispatch]);
	return (
		<>
			<Typography variant='h3'>Dashboard</Typography>
			{needVerification && (
				<AlertMessage
					type='success'
					message='Please verify your email address.'
				/>
			)}
			<Typography variant='h6' color='primary'>
				Hello {user?.firstName}
			</Typography>
			<Grid
				className={classes.root}
				container
				spacing={5}
				direction='column'
				justify='flex-start'
				alignItems='stretch'
			>
				<Grid container item spacing={3}>
					<Grid item lg={3} sm={6} xl={3} xs={12}>
						<StatCard
							name='Outstanding Amount'
							stat='23,000'
							improved={true}
							change={3.5}
							chartData={outstandingAmountData}
							chartOptions={statCardOptions}
						/>
					</Grid>
					<Grid item lg={3} sm={6} xl={3} xs={12}>
						<DebitCreditRatio />
					</Grid>
					<Grid item lg={3} sm={6} xl={3} xs={12}>
						<Savings />
					</Grid>
					<Grid item lg={3} sm={6} xl={3} xs={12}>
						<StatCard
							name='total debt'
							stat='5,548'
							improved={false}
							change={12.4}
							chartData={totalDebtData}
							chartOptions={statCardOptions}
						/>
					</Grid>
					<Grid item lg={7} md={12} xl={8} xs={12}>
						<Performance />
					</Grid>
					<Grid item lg={5} md={6} xl={4} xs={12}>
						<DebtByCategory />
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Dashboard;
