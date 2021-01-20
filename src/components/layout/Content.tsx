import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../layout/Navbar';
import Dashboard from '../menu/dashboard/Dashboard';
import NewTally from '../menu/newTally/NewTally';
import History from '../menu/history/History';
import Profile from '../menu/profile/Profile';
import Premium from '../menu/premium/Premium';
import NoMatch from '../menu/NoMatch';

const useStyles = makeStyles(theme => ({
	root: {
		// marginLeft: drawerWidth,
		flexShrink: 1,
		width: '100%',
		backgroundColor: theme.palette.secondary.main,
		//to avoid content being covered by open drawer
		[theme.breakpoints.down('sm')]: {
			marginLeft: 0,
			width: '100%'
		},
		padding: theme.spacing(3),
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
				<Route path='/home/dashboard'>
					<Dashboard />
				</Route>
				<Route path='/home/newtally'>
					<NewTally />
				</Route>
				<Route path='/home/history'>
					<History />
				</Route>
				<Route path='/home/profile'>
					<Profile />
				</Route>
				<Route path='/home/premium'>
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
