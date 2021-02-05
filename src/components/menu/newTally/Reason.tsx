import React, { useState } from 'react';
import {
	Grid,
	Typography,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
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
