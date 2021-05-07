import React, { useState } from 'react';
import { firebase, db } from '../../../firebase/config';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

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

interface Props {}

function Party(props: Props) {
	const classes = useStyles();
	const { user } = useSelector((state: RootState) => state.auth);

	const [party, setParty] = useState('');
	const { loading, data } = useFetchSelections('party');

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setParty(event.target.value as string);
	};

	const addOption = (newOption: string) => {
		db.collection('users')
			.doc(`${user?.id}`)
			.update({ party: firebase.firestore.FieldValue.arrayUnion(newOption) });
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
						onClick={() => addOption('test party')}
					>
						Add
					</Button>
				</Select>
			</Grid>
		</Grid>
	);
}

export default Party;
