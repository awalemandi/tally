import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
	Typography,
	Button,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Paper,
	Box,
	Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../common/Copyright';
import Logo from '../../images/tally.png';
import LoginImage from '../../images/login.jpg';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
	},
	logo: {
		height: '10rem',
		[theme.breakpoints.down('xs')]: {
			alignSelf: 'center',
		},
	},
	imageContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	image: {
		flexGrow: 1,
		width: '900px',
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
}));

export default function LogIn() {
	const classes = useStyles();
	const [signInDetails, setSignInDetails] = useState({
		email: '',
		password: '',
		keepLoggedIn: false,
	});

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
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		console.log(signInDetails);
	};
	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={6} className={classes.imageContainer}>
				<img src={LoginImage} className={classes.image} />
			</Grid>
			<Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square className={classes.formContainer}>
				<div className={classes.paper}>
					<Link href='/'>
						<img src={Logo} className={classes.logo} />
					</Link>
					<Typography component='h1' variant='h5' className={classes.greeting}>
						Welcome back!
					</Typography>
					<form
						className={classes.form}
						noValidate={false}
						onSubmit={handleSubmit}
					>
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
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href='/signup' variant='body2'>
									{"Don't have an account? Sign Up"}
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
