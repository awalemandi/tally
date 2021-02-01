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
import { TiPlus } from 'react-icons/ti';

const useStyles = makeStyles(theme => ({
	root: {},
}));

function Category() {
	const classes = useStyles();
	const [category, setCategory] = React.useState('');

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setCategory(event.target.value as string);
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
					Category
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Select
					labelId=''
					id='party'
					value={category}
					onChange={handleChange}
					fullWidth
				>
					<MenuItem>Family</MenuItem>
					<MenuItem>Friends</MenuItem>
					<MenuItem>Education</MenuItem>
					<MenuItem>Mortgage</MenuItem>
					<Button
						fullWidth
						variant='text'
						color='inherit'
						startIcon={<TiPlus />}
					>
						Add new
					</Button>
				</Select>
			</Grid>
		</Grid>
	);
}

export default Category;
