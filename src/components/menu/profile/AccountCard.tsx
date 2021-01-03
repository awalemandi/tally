import React from 'react';
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

const user = {
	avatar: '/static/images/avatars/avatar_6.png',
	city: 'Los Angeles',
	country: 'USA',
	jobTitle: 'Senior Developer',
	name: 'Katarina Smith',
	timezone: 'GTM-7',
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

	return (
		<Card>
			<CardContent>
				<Box alignItems='center' display='flex' flexDirection='column'>
					<Avatar className={classes.avatar} src={user.avatar} />
					<Typography color='textPrimary' gutterBottom variant='h3'>
						{user.name}
					</Typography>
					<Typography color='textSecondary' variant='body1'>
						{`${user.city} ${user.country}`}
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
