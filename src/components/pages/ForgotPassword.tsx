import React, { useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	sendPasswordResetEmail,
	setError,
	setSuccess,
} from '../../redux/actions/authActions';
import { RootState } from '../../redux/store';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
	Typography,
	Button,
	TextField,
	Link,
	Paper,
	Box,
	Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../common/Copyright';
import Logo from '../../images/tally.png';
import LoginImage from '../../images/playfulcat.svg';
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
}));

export default function ForgotPassword() {
	const classes = useStyles();
	const [email, setEmail] = useState('');

	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();
	const { error, success } = useSelector((state: RootState) => state.auth);

	useEffect(() => {
		return () => {
			if (error) {
				dispatch(setError(''));
			}
			if (success) {
				dispatch(setSuccess(''));
			}
		};
	}, [error, dispatch, success]);

	//onChange handlers for user input
	const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
		setEmail(e.target.value as string);
	};

	//onClick handler for submit button
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		await dispatch(sendPasswordResetEmail(email, 'Email sent!'));
		setLoading(false);
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
					<Link href='/'>
						<img src={Logo} className={classes.logo} />
					</Link>
					<Typography component='h1' variant='h5' className={classes.greeting}>
						Forgot password?
					</Typography>
					<form
						className={classes.form}
						noValidate={false}
						onSubmit={handleSubmit}
					>
						{error && <AlertMessage type='error' message={error} />}
						{success && <AlertMessage type='success' message={success} />}
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
							onChange={handleChange}
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
							disabled={loading}
						>
							{loading ? 'Loading...' : 'Send reset email'}
						</Button>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
