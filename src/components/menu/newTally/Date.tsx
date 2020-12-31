import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
// import DateFnsUtils from 'date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
}));

function Date() {
	const classes = useStyles();

	const handleDateChange = (date: Date | null) => {
		// setSelectedDate(date);
	};

	return (
		<>
		</>
		// <MuiPickersUtilsProvider utils={DateFnsUtils}>
		// 	{/* <Grid
		// 		container
		// 		direction='column'
		// 		justify='space-between'
		// 		alignItems='stretch'
		// 		spacing={3}
		// 	>
		// 		<Grid item xs={12}>
		// 			<Typography variant='h4' color='primary'>
		// 				When?
		// 			</Typography>
		// 		</Grid>
		// 		<Grid item xs={12}>
		// 			<KeyboardDatePicker
		// 				disableToolbar
		// 				variant='inline'
		// 				format='MM/dd/yyyy'
		// 				margin='normal'
		// 				id='date'
		// 				value=''
		// 				onChange={handleDateChange}
		// 				KeyboardButtonProps={{
		// 					'aria-label': 'change date',
		// 				}}
		// 			/>
		// 		</Grid>
		// 	</Grid> */}
		// </MuiPickersUtilsProvider>
	);
}

export default Date;
