import React, { useState } from 'react';
import useFetchSelections from '../../hooks/useFetchSelections';
import {
	Grid,
	Typography,
	FormControl,
	Select,
	MenuItem,
	FormHelperText,
	Button,
	Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TiPlus } from 'react-icons/ti';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

function Party() {
	const classes = useStyles();
	const [party, setParty] = React.useState('');
	const { loading, data, error } = useFetchSelections('party');

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
			component={Paper}
			className={classes.root}
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
						color='primary'
						startIcon={<TiPlus />}
					>
						Add
					</Button>
				</Select>
			</Grid>
		</Grid>
	);
}

export default Party;
