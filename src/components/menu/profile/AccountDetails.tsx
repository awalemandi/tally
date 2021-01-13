import React, { useState } from 'react';
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	TextField,
	makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {},
}));

const ProfileDetails = () => {
	const classes = useStyles();
	const [values, setValues] = useState({
		firstName: 'Mads',
		lastName: 'Awale',
		email: 'madsawale@gmail.com',
		username: 'cussinstoic'
	});

	const handleChange = (event:React.ChangeEvent<{ value: unknown }>) => {
		// setValues({
		// 	...values,
		// 	[event.target.name]: event.target.value,
		// });
	};

	return (
		<form autoComplete='off' noValidate>
			<Card>
				<CardHeader subheader='The information can be edited' title='Profile' />
				<Divider />
				<CardContent>
					<Grid container spacing={3}>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label='First name'
								name='firstName'
								onChange={handleChange}
								required
								value={values.firstName}
								variant='outlined'
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label='Last name'
								name='lastName'
								onChange={handleChange}
								required
								value={values.lastName}
								variant='outlined'
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label='Username'
								name='username'
								onChange={handleChange}
								required
								value={values.username}
								variant='outlined'
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label='Email Address'
								name='email'
								onChange={handleChange}
								required
								value={values.email}
								variant='outlined'
							/>
						</Grid>
					</Grid>
				</CardContent>
				<Divider />
				<Box display='flex' justifyContent='flex-end' p={2}>
					<Button color='primary' variant='contained'>
						Save details
					</Button>
				</Box>
			</Card>
		</form>
	);
};

export default ProfileDetails;
