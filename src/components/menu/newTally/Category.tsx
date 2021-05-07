import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { firebase, db } from '../../../firebase/config';
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
import useFetchSelections from '../../hooks/useFetchSelections';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

function Category() {
	const classes = useStyles();

	const { user } = useSelector((state: RootState) => state.auth);

	const [category, setCategory] = useState('sdafa');
	const { loading, data } = useFetchSelections('category');

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setCategory(event.target.value as string);
	};

	const addOption = (newOption: string) => {
		db.collection('users')
			.doc(`${user?.id}`)
			.update({
				category: firebase.firestore.FieldValue.arrayUnion(newOption),
			});
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
					{loading ? (
						<MenuItem>Loading..</MenuItem>
					) : (
						data.map(option => (
							<MenuItem value={option} key={data.indexOf(option)}>
								{option}
							</MenuItem>
						))
					)}
					<Button
						fullWidth
						variant='text'
						color='primary'
						startIcon={<TiPlus />}
						onClick={() => addOption('test category')}
					>
						Add
					</Button>
				</Select>
			</Grid>
		</Grid>
	);
}

export default Category;
