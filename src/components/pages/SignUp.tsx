import React, { useState } from 'react';
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

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
		paddingTop: theme.spacing(8),
		backgroundColor: theme.palette.secondary.light
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
		email: '',
		password: '',
		subscribeNewsletter: false,
	});

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
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		console.log(userDetails);
	};

	return (
		<div className={classes.root}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div className={classes.paper}>
					<Link href='/'>
						<img src={Logo} className={classes.logo} />
					</Link>
					<Typography component='h1' variant='h5'>
						Ready to Tally Up?
					</Typography>
					<form
						className={classes.form}
						noValidate={false}
						onSubmit={handleSubmit}
					>
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
							// onClick={handleSubmit}
						>
							Sign Up
						</Button>
						<Grid container justify='flex-end'>
							<Grid item>
								<Link href='/login' variant='body2'>
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
