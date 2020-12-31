import React, { useState } from 'react';
import {
	Grid,
	Typography,
	FormControl,
	Select,
	MenuItem,
	FormHelperText,
	Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GrFormAdd } from 'react-icons/gr';

const useStyles = makeStyles(theme => ({
	root: {},
}));

function Party() {
	const classes = useStyles();
	const [party, setParty] = React.useState('');

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setParty(event.target.value as string);
	};

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
					To/From Whom?
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Select
					labelId='demo-simple-select-label'
					id='party'
					value={party}
					onChange={handleChange}
					fullWidth
				>
					<MenuItem>Tommy Shelby</MenuItem>
					<MenuItem>Dad</MenuItem>
					<MenuItem>Westpac</MenuItem>
					<MenuItem>Some guy</MenuItem>
					<Button
						fullWidth
						variant='text'
						color='inherit'
						startIcon={<GrFormAdd />}
					>
						Add new
					</Button>
				</Select>
			</Grid>
		</Grid>
	);
}

export default Party;
