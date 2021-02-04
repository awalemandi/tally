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

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: '1rem',
		padding: 0
	},
	up: {
		backgroundColor: fade(theme.palette.secondary.main, 0.9), //rgb(106, 192, 121, 0.8)
	},
	down: {
		backgroundColor: fade(theme.palette.primary.main, 0.7)//'rgb(235, 69, 69, 0.8)',
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
							<ListItem>
								<ListItemAvatar>
									<Avatar className={classes.down}>
										<RiEmotionUnhappyLine />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary='You lent to Katy, $300 for trip to Canberra on 10/12/20.' />
							</ListItem>
							<Divider variant='inset' component='li' />
							<ListItem>
								<ListItemAvatar>
									<Avatar className={classes.up}>
										<RiEmotionHappyLine />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary='You borrowed from Dad, $10,000 for startup capital on 04/11/20.' />
							</ListItem>
							<Divider variant='inset' component='li' />
							<ListItem>
								<ListItemAvatar>
									<Avatar className={classes.down}>
										<RiEmotionUnhappyLine />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary='You lent Katy $300 for trip to Canberra on 10/12/20.' />
							</ListItem>
						</List>
					</Paper>
				</Grid>
			</Grid>
		</>
	);
};

export default History;
