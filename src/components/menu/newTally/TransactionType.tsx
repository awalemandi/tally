import React, { useState } from 'react';
import {
	Container,
	TextField,
	ButtonGroup,
	Button,
	Grid,
	Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(1),
		marginBottom: theme.spacing(1)
	},
}));

function TransactionType() {
	const classes = useStyles();
	const [transactionType, setTransactionType] = React.useState('');

	const handleChange = (event: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setTransactionType(event.target.value);
    };
    
    const handleClick = (type: string) => {
        setTransactionType(type.toUpperCase());
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
					<TextField
						autoFocus={true}
						fullWidth
						id='transactionType'
						name='transactionType'
						placeholder='Select Tally type'
						value={transactionType}
                        size='medium'
						color='primary'
					/>
				</Grid>
				<Grid item xs={12}>
					<ButtonGroup
                        color='primary'
                        variant='contained'
						size='large'
						aria-label='outlined primary button group'
					>
						<Button onClick={()=> handleClick('lent')}>Lent</Button>
						<Button onClick={()=> handleClick('borrowed')}>Borrowed</Button>
					</ButtonGroup>
				</Grid>
			</Grid>
	);
}

export default TransactionType;
