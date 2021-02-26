import React, { useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { signup, setError } from '../../redux/actions/authActions';
import { RootState } from '../../redux/store';
import {
	Button,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Grid,
	Box,
	Typography,
	Container,
	CssBaseline,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../images/tally.png';
import Copyright from '../common/Copyright';
import AlertMessage from '../common/AlertMessage';

//styling
const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
		paddingTop: theme.spacing(8),
		backgroundColor: theme.palette.secondary.light,
	},
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	logo: {
		height: '10rem',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export const SignUp = () => {
	const classes = useStyles();
	const [userDetails, setUserDetails] = useState({
		firstName: '',
		lastName: '',
		userName: '',
		email: '',
		password: '',
		subscribeNewsletter: false,
	});
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();
	const { error } = useSelector((state: RootState) => state.auth);

	useEffect(() => {
		return () => {
			if (error) {
				dispatch(setError(''));
			}
		};
	}, [error, dispatch]);

	//onChange handlers for user input
	const handleChange = {
		firstName: function (e: React.ChangeEvent<{ value: unknown }>) {
			setUserDetails({
				...userDetails,
				firstName: e.target.value as string,
			});
		},
		lastName: function (e: React.ChangeEvent<{ value: unknown }>) {
			setUserDetails({
				...userDetails,
				lastName: e.target.value as string,
			});
		},
		userName: function (e: React.ChangeEvent<{ value: unknown }>) {
			setUserDetails({
				...userDetails,
				userName: e.target.value as string,
			});
		},
		email: function (e: React.ChangeEvent<{ value: unknown }>) {
			setUserDetails({
				...userDetails,
				email: e.target.value as string,
			});
		},
		password: function (e: React.ChangeEvent<{ value: unknown }>) {
			setUserDetails({
				...userDetails,
				password: e.target.value as string,
			});
		},
		//toggles subsribtion state from false to true and vice versa
		subscribeNewsletter: function (prevState: any) {
			setUserDetails(prevState => ({
				...userDetails,
				subscribeNewsletter: !prevState.subscribeNewsletter,
			}));
		},
	};

	//onClick handler for submit button
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		dispatch(
			signup(
				{
					email: userDetails.email,
					password: userDetails.password,
					firstName: userDetails.firstName,
					lastName: userDetails.lastName,
					userName: userDetails.userName,
					subscribeNewsletter: userDetails.subscribeNewsletter,
				},
				() => setLoading(false)
			)
		);
	};

	return (
		<div className={classes.root}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div className={classes.paper}>
					<RouterLink to='/'>
						<img src={Logo} className={classes.logo} />
					</RouterLink>
					<Typography component='h1' variant='h5'>
						Ready to Tally Up?
					</Typography>
					<form
						className={classes.form}
						noValidate={false}
						onSubmit={handleSubmit}
					>
						{error && <AlertMessage type='error' message={error} />}
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete='fname'
									name='firstName'
									variant='outlined'
									required
									fullWidth
									id='firstName'
									label='First Name'
									autoFocus
									onChange={handleChange.firstName}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant='outlined'
									required
									fullWidth
									id='lastName'
									label='Last Name'
									name='lastName'
									autoComplete='lname'
									onChange={handleChange.lastName}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant='outlined'
									required
									fullWidth
									id='userName'
									label='User Name'
									name='userName'
									autoComplete='uname'
									onChange={handleChange.userName}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									type='email'
									autoComplete='email'
									onChange={handleChange.email}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='current-password'
									onChange={handleChange.password}
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox
											value='allowExtraEmails'
											color='primary'
											onChange={handleChange.subscribeNewsletter}
										/>
									}
									label='I want to receive inspiration, marketing promotions and updates via email.'
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
							disabled={loading}
						>
							{loading ? 'Loading...' : 'Sign Up'}
						</Button>
						<Grid container justify='flex-end'>
							<Grid item>
								<Link href='/signin' variant='body2'>
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<Box mt={5}>
					<Copyright />
				</Box>
			</Container>
		</div>
	);
};
