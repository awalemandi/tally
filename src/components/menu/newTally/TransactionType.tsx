import React, { useState } from 'react';
import {
	Container,
	TextField,
	ButtonGroup,
	Button,
	Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {

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
			>
				<Grid item xs={12}>
					<TextField
						autoFocus={true}
						fullWidth
						id='transactionType'
						name='transactionType'
						placeholder='Tally'
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
