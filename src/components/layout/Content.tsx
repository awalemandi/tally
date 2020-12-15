import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from './Navbar';
import Dashboard from '../menu/Dashboard';
import NewTally from '../menu/NewTally';
import History from '../menu/History';
import Profile from '../menu/Profile';
import Premium from '../menu/Premium';
import NoMatch from '../menu/NoMatch';

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
