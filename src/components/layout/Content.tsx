import React from 'react';
import { Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from './Navbar';

const useStyles = makeStyles(theme => ({
	root: {
		//to avoid content being covered by open drawer
		[theme.breakpoints.up('md')]: {
			marginLeft: drawerWidth,
		},
		flexGrow: 1,
		padding: theme.spacing(1),
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
}));

const Content = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.toolbar} />
			<Typography paragraph>
				{[...new Array(12)]
					.map(
						() =>
							`This is the Main content which Users will only see once logged in.`
					)
					.join('\n')}
			</Typography>
			<Typography paragraph>
				Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
				ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
				integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
				lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
				Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
				vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
				accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
				Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
				senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
				Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
				maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
				aliquam ultrices sagittis orci a.
			</Typography>
		</div>
	);
};

export default Content;
