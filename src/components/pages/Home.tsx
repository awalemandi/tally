import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Navbar from '../layout/Navbar';
import Content from '../layout/Content';
import Footer from '../layout/Footer';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	}
}));
const Home = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Navbar />
			<Content />
			<Footer />
		</div>
	);
};

export default Home;
