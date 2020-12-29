import React from 'react';
import TransactionType from './TransactionType';
import Amount from './Amount';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		height: '10rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
}));

const NewTally = () => {
	const classes = useStyles();
	return (
		<form className={classes.root} noValidate autoComplete='off'>
			<h1>Add a new Tally</h1>
			<TransactionType />
            <Amount/>
		</form>
	);
};

export default NewTally;
