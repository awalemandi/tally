import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	List,
	ListItem,
	Divider,
	ListItemText,
	ListItemAvatar,
	Avatar,
	Typography,
	Paper,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	inline: {
		display: 'inline',
	},
}));

const History = () => {
	const classes = useStyles();
	return (
		<div>
			<Paper>
				<List className={classes.root}>
					<ListItem>
						<ListItemAvatar>
							<Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
						</ListItemAvatar>
						<ListItemText
							primary='You lent to Katy, $300 for trip to Canberra on 10/12/20.'
						/>
					</ListItem>
					<Divider variant='inset' component='li' />
                    <ListItem>
						<ListItemAvatar>
							<Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
						</ListItemAvatar>
						<ListItemText
							primary='You borrowed from Dad, $10,000 for startup capital on 04/11/20.'
						/>
					</ListItem>
					<Divider variant='inset' component='li' />
                    <ListItem>
						<ListItemAvatar>
							<Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
						</ListItemAvatar>
						<ListItemText
							primary='You lent Katy $300 for trip to Canberra on 10/12/20.'
						/>
					</ListItem>
				</List>
			</Paper>
		</div>
	);
};

export default History;
