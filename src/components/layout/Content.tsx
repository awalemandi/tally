import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../layout/SideDrawer';
import Dashboard from '../menu/dashboard/Dashboard';
import NewTally from '../menu/newTally/NewTally';
import History from '../menu/history/History';
import Profile from '../menu/profile/Profile';
import Premium from '../menu/premium/Premium';
import NoMatch from '../menu/NoMatch';
import { user } from '../menu/profile/AccountCard';

const useStyles = makeStyles(theme => ({
	root: {
		paddingBottom: theme.spacing(5),
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
			<Switch>
				<Route path={`/${user.username}/dashboard`}>
					<Dashboard />
				</Route>
				<Route path={`/${user.username}/newtally`}>
					<NewTally />
				</Route>
				<Route path={`/${user.username}/history`}>
					<History />
				</Route>
				<Route path={`/${user.username}/profile`}>
					<Profile />
				</Route>
				<Route path={`/${user.username}/premium`}>
					<Premium />
				</Route>
				<Route path='*'>
					<NoMatch />
				</Route>
			</Switch>
		</div>
	);
};

export default Content;
