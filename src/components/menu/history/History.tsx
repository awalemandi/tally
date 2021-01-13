import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
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
import { HiTrendingUp, HiTrendingDown } from 'react-icons/hi';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	inline: {
		display: 'inline',
	},
	up: {
		backgroundColor: theme.palette.secondary.dark,
	},
	down: {
		backgroundColor: theme.palette.primary.light,
	},
}));

const History = () => {
	const classes = useStyles();
	return (
		<Grid
			className={classes.root}
			container
			spacing={4}
			direction='column'
			justify='flex-start'
			alignItems='stretch'
		>
			<Grid item xs={12}>
				<Typography variant='h3'>Recent Transactions</Typography>
			</Grid>
			<Grid item xs={12}>
				<Paper>
					<List>
						<ListItem>
							<ListItemAvatar>
								<Avatar className={classes.down}>
									<HiTrendingDown />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary='You lent to Katy, $300 for trip to Canberra on 10/12/20.' />
						</ListItem>
						<Divider variant='inset' component='li' />
						<ListItem>
							<ListItemAvatar>
								<Avatar className={classes.up}>
									<HiTrendingUp />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary='You borrowed from Dad, $10,000 for startup capital on 04/11/20.' />
						</ListItem>
						<Divider variant='inset' component='li' />
						<ListItem>
							<ListItemAvatar>
								<Avatar className={classes.down}>
									<HiTrendingDown />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary='You lent Katy $300 for trip to Canberra on 10/12/20.' />
						</ListItem>
					</List>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default History;
