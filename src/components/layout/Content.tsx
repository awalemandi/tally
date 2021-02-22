import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../routes/PrivateRoute';
import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../layout/SideDrawer';
import Dashboard from '../menu/dashboard/Dashboard';
import NewTally from '../menu/newTally/NewTally';
import History from '../menu/history/History';
import Profile from '../menu/profile/Profile';
import Premium from '../menu/premium/Premium';
import NoMatch from '../menu/NoMatch';

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
	console.log('content mounted')
	const classes = useStyles();
	const { user } = useSelector((state: RootState) => state.auth);
	return (
		<div className={classes.root}>
			<div className={classes.toolbar} />
			<Switch>
				<PrivateRoute
					path={`/dashboard`}
					component={Dashboard}
				/>
				<PrivateRoute
					path={`/newtally`}
					component={NewTally}
				/>
				<Route path={`/${user?.userName}/history`}>
					<History />
				</Route>
				<Route path={`/${user?.userName}/profile`}>
					<Profile />
				</Route>
				<Route path={`/${user?.userName}/premium`}>
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
