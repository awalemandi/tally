import React, { useState } from 'react';
import {
	Grid,
	Typography,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	TextField,
	Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(1),
		marginBottom: theme.spacing(1)
	},
}));

function Reason() {
	const classes = useStyles();
	const [reason, setReason] = React.useState('');

	// const handleClick = () => {
	//     setAmount();
	// };

	return (
		<Grid
			container
			direction='column'
			justify='space-between'
			alignItems='stretch'
			spacing={3}
			component={Paper}
			className={classes.root}
		>
			<Grid item xs={12}>
				<Typography variant='h4' color='primary'>
					What For?
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<TextField
					fullWidth
					label='For'
					id='reason'
					variant='outlined'
				/>
			</Grid>
		</Grid>
	);
}

export default Reason;
