import React from 'react';
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
import Copyright from '../Copyright';
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

	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={6} className={classes.imageContainer}>
				<img src={LoginImage} className={classes.image} />
			</Grid>
			<Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Link href='/'>
						<img src={Logo} className={classes.logo} />
					</Link>
					<Typography component='h1' variant='h5' className={classes.greeting}>
						Welcome back!
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
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
						/>
						<FormControlLabel
							control={<Checkbox value='remember' color='primary' />}
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
