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
			component={Paper}
			className={classes.root}
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
