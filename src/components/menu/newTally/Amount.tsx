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

function Amount() {
	const classes = useStyles();
	const [amount, setAmount] = React.useState(0);

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
					How Much?
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<TextField
					fullWidth
					type='number'
					label='Amount'
					id='amount'
					InputProps={{
						startAdornment: <InputAdornment position='start'>$</InputAdornment>,
					}}
					variant='outlined'
				/>
			</Grid>
		</Grid>
	);
}

export default Amount;
