import React, { useState } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

function Date() {
	const classes = useStyles();

	const [selectedDate, setSelectedDate] = React.useState<Date | null>();

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

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
					When?
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<KeyboardDatePicker
					disableToolbar
					fullWidth
					variant='inline'
					format='dd/MM/yyyy'
					margin='normal'
					id='date'
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
			</Grid>
		</Grid>
	);
}

export default Date;
