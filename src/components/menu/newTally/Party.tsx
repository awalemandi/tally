import React, { useState } from 'react';
import {
	Grid,
	Typography,
	FormControl,
	Select,
	MenuItem,
	FormHelperText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
				<FormControl>
					<Select
						value={party}
						autoWidth
						onChange={handleChange}
						displayEmpty
						inputProps={{ 'aria-label': 'Without label' }}
					>
						<MenuItem value='' disabled>
							Tommy
						</MenuItem>
						<MenuItem value={10}>Dad</MenuItem>
						<MenuItem value={20}>Benny</MenuItem>
						<MenuItem value={30}>Bank</MenuItem>
					</Select>
					<FormHelperText>Placeholder</FormHelperText>
				</FormControl>
			</Grid>
		</Grid>
	);
}

export default Party;
