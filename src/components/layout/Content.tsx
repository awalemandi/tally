import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from './Navbar';
import Dashboard from '../menu/Dashboard';
import NewTally from '../menu/NewTally';
import History from '../menu/History';
import DoughnutChart from '../DoughnutChart';

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
			<DoughnutChart />
			{/* <Switch>
				<Route exact path='/home/dashboard'>
					<Dashboard />
				</Route>
				<Route exact path='/home/newtally'>
					<NewTally />
				</Route>
				<Route exact path='/home/history'>
					<History />
				</Route>
			</Switch> */}
		</div>
	);
};

export default Content;
