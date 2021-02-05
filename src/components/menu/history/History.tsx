import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import {
	Grid,
	List,
	ListItem,
	Divider,
	ListItemText,
	ListItemAvatar,
	Avatar,
	Typography,
	Paper,
} from '@material-ui/core';
import { RiEmotionHappyLine, RiEmotionUnhappyLine } from 'react-icons/ri';
import { transactions } from './data';

// interface transactionData {
//     transactionType: 'LENT' | 'BORROWED';
//     amount: string;
//     reason: string;
//     party: string;
//     date: string;
//     category: string;
// };

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: '1rem',
		padding: 0,
	},
	lentIcon: {
		backgroundColor: fade(theme.palette.secondary.main, 0.9), //rgb(106, 192, 121, 0.8)
	},
	borrowedIcon: {
		backgroundColor: fade(theme.palette.primary.main, 0.7), //'rgb(235, 69, 69, 0.8)',
	},
}));

const History = () => {
	const classes = useStyles();
	return (
		<>
			<Typography variant='h3'>Recent Transactions</Typography>
			<Grid
				className={classes.root}
				container
				spacing={4}
				direction='column'
				justify='center'
				alignItems='stretch'
			>
				<Grid item xs={12}>
					<Paper>
						<List>
							{transactions.map(transaction => (
								<>
									<ListItem>
										<ListItemAvatar>
											<Avatar
												className={
													transaction.transactionType == 'LENT'
														? classes.lentIcon
														: classes.borrowedIcon
												}
											>
												{transaction.transactionType == 'LENT' ? (
													<RiEmotionHappyLine />
												) : (
													<RiEmotionUnhappyLine />
												)}
											</Avatar>
										</ListItemAvatar>
										<ListItemText
											primary={`You ${
												transaction.transactionType == 'LENT'
													? 'lent to'
													: 'borrowed from'
											} ${transaction.party}, $${transaction.amount} for ${
												transaction.reason
											} on ${transaction.date}.`}
										/>
									</ListItem>
									<Divider variant='inset' component='li' />
								</>
							))}
						</List>
					</Paper>
				</Grid>
			</Grid>
		</>
	);
};

export default History;
