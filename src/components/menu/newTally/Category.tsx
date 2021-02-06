import React, { useState } from 'react';
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
			component={Paper}
			className={classes.root}
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

export default Category;
