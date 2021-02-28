import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	useRouteMatch,
} from 'react-router-dom';
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
	let { path } = useRouteMatch();
	const classes = useStyles();
	const { user } = useSelector((state: RootState) => state.auth);
	return (
		<div className={classes.root}>
			<div className={classes.toolbar} />
			<Switch>
				<PrivateRoute exact path={`${path}`} component={Dashboard} />
				<PrivateRoute exact path={`${path}/newtally`} component={NewTally} />
				<PrivateRoute exact path={`${path}/history`} component={History} />
				<PrivateRoute exact path={`${path}/profile`} component={Profile} />
				<PrivateRoute exact path={`${path}/premium`} component={Premium} />
				<PrivateRoute exact path={`${path}/*`} component={NoMatch} />
			</Switch>
		</div>
	);
};

export default Content;
