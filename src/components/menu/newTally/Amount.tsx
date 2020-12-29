import React, { useState } from 'react';
import {
	TextField,
	FormControl,
	InputLabel,
	Input,
	InputAdornment,
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
		<FormControl fullWidth>
			<InputLabel htmlFor='standard-adornment-amount'>Amount</InputLabel>
			<Input
				id='amount'
				type='number'
				startAdornment={<InputAdornment position='start'>$</InputAdornment>}
			/>
		</FormControl>
	);
}

export default Amount;
