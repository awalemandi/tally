import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Navbar } from '../layout/Navbar';
import Footer from '../layout/Footer';
import Content from '../layout/Content';
import { drawerWidth } from '../layout/Navbar';

const useStyles = makeStyles(theme => ({
	root: {
		marginLeft: drawerWidth,
		width: '100%',
		minHeight: '100vh',
		//to avoid content being covered by open drawer
		[theme.breakpoints.down('sm')]: {
			marginLeft: 0,
			width: '100%'
		},
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'stretch',
		backgroundColor: theme.palette.primary.main
	},
}));
const Home = () => {
	const classes = useStyles();
	return (
		<Container className={classes.root} maxWidth={false}>
			<header>
				<Navbar />
			</header>
			<body>
				<Content />
			</body>
			<footer>
				<Footer />
			</footer>
		</Container>
	);
};

export default Home;
