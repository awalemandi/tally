import React from 'react';
// import { makeSelectUsers } from '../../../redux/selectors';
// import { createSelector } from 'reselect';
// import { useSelector } from 'react-redux';

import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Divider,
	Typography,
	makeStyles,
} from '@material-ui/core';
import profileImage from '../../../images/profile.jpg';

// const stateSelector = createSelector(makeSelectUsers, (users) => ({
// 	users
// }))

export const user = {
	avatar: profileImage,
	firstName: 'Mads',
	lastName: 'Awale',
	username: 'cussinstoic'
};

const useStyles = makeStyles(() => ({
	root: {},
	avatar: {
		height: 100,
		width: 100,
	},
}));

const ProfileCard = () => {
	const classes = useStyles();
	// const {users} = useSelector(stateSelector);

	return (
		<Card>
			<CardContent>
				<Box alignItems='center' display='flex' flexDirection='column'>
					<Avatar className={classes.avatar} src={user.avatar} />
					<Typography color='textPrimary' gutterBottom variant='h5'>
						{`${user.firstName} ${user.lastName}`}
					</Typography>
					<Typography color='textSecondary' variant='body1'>
						{`${user.username}`}
					</Typography>
				</Box>
			</CardContent>
			<Divider />
			<CardActions>
				<Button color='primary' fullWidth variant='text'>
					Upload picture
				</Button>
			</CardActions>
		</Card>
	);
};

export default ProfileCard;
