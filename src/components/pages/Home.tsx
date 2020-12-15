import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Navbar } from '../layout/Navbar';
import Footer from '../layout/Footer';
import Content from '../layout/Content';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}));
const Home = () => {
	const classes = useStyles();
	return (
		<Container className={classes.root}>
			<Navbar />
			<Content />
			<Footer />
		</Container>
	);
};

export default Home;
