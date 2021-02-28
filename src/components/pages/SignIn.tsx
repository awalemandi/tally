import React, { useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin, setError } from '../../redux/actions/authActions';
import { RootState } from '../../redux/store';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import {
	Typography,
	Button,
	Link,
	TextField,
	FormControlLabel,
	Checkbox,
	Paper,
	Box,
	Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../common/Copyright';
import Logo from '../../images/tally.png';
import LoginImage from '../../images/minions.svg';
import AlertMessage from '../common/AlertMessage';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
		background: theme.palette.secondary.light,
	},
	logo: {
		height: '10rem',
		[theme.breakpoints.down('xs')]: {
			alignSelf: 'center',
		},
	},
	imageContainer: {
		width: '100%',
		background: 'transparent',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	image: {
		width: '25rem',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-around',
	},
	greeting: {
		[theme.breakpoints.down('xs')]: {
			alignSelf: 'center',
		},
	},
	formContainer: {
		background: theme.palette.secondary.light,
		// background: `linear-gradient(45deg, ${theme.palette.secondary.light} 20%, ${theme.palette.secondary.main} 80%)`,
	},
	form: {
		width: '60%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
		[theme.breakpoints.down('xs')]: {
			alignSelf: 'center',
		},
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	navLink: {
		textDecoration: 'none',
		alignSelf: 'center',
	},
}));

export default function SignIn() {
	let { url } = useRouteMatch();
	const classes = useStyles();
	const [signInDetails, setSignInDetails] = useState({
		email: '',
		password: '',
		keepLoggedIn: false,
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
		email: function (e: React.ChangeEvent<{ value: unknown }>) {
			setSignInDetails({
				...signInDetails,
				email: e.target.value as string,
			});
		},
		password: function (e: React.ChangeEvent<{ value: unknown }>) {
			setSignInDetails({
				...signInDetails,
				password: e.target.value as string,
			});
		},
		//toggles 'Remember me' state
		keepLoggedIn: function (prevState: any) {
			setSignInDetails(prevState => ({
				...signInDetails,
				keepLoggedIn: !prevState.keepLoggedIn,
			}));
		},
	};

	//onClick handler for submit button
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		dispatch(
			signin(
				{
					email: signInDetails.email,
					password: signInDetails.password,
					remember: signInDetails.keepLoggedIn,
				},
				() => setLoading(false)
			)
		);
	};
	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={6} className={classes.imageContainer}>
				<img src={LoginImage} className={classes.image} />
			</Grid>
			<Grid
				item
				xs={12}
				sm={8}
				md={6}
				component={Paper}
				elevation={6}
				square
				className={classes.formContainer}
			>
				<div className={classes.paper}>
					<RouterLink to='/'>
						<img src={Logo} className={classes.logo} />
					</RouterLink>
					<Typography component='h1' variant='h4' className={classes.greeting}>
						Hello there!
					</Typography>
					<form
						className={classes.form}
						noValidate={false}
						onSubmit={handleSubmit}
					>
						{error && <AlertMessage type='error' message={error} />}
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email'
							name='email'
							type='email'
							autoComplete='email'
							autoFocus
							onChange={handleChange.email}
						/>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							onChange={handleChange.password}
						/>
						<FormControlLabel
							control={
								<Checkbox
									value='remember'
									color='primary'
									onChange={handleChange.keepLoggedIn}
								/>
							}
							label='Remember me'
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
							disabled={loading}
						>
							{loading ? 'Loading...' : 'Sign In'}
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href='/forgot-password' variant='body2'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href='/signup' variant='body2'>
									Don't have an account? Sign Up
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
