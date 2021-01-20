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
		width: 'auto',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		//to avoid content being covered by open drawer
		[theme.breakpoints.down('sm')]: {
			marginLeft: 0,
			width: '100%',
		},
	},
	content: {
		flexGrow: 1,
		flexShrink: 0,
		flexBasis: 'auto',
	},
	footer: {
		flexShrink: 0 /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */,
	},
}));
const Home = () => {
	const classes = useStyles();
	return (
		<Container className={classes.root} maxWidth={false}>
			<header>
				<Navbar />
			</header>
			<body className={classes.content}>
				<Content />
			</body>
			<footer className={classes.footer}>
				<Footer />
			</footer>
		</Container>
	);
};

export default Home;
