import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Navbar } from '../layout/Navbar';
import Footer from '../layout/Footer';
import Content from '../layout/Content';
import { drawerWidth } from '../layout/SideDrawer';

const useStyles = makeStyles(theme => ({
	root: {
		marginLeft: drawerWidth,
		padding: theme.spacing(2),
		width: 'auto',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden',
		backgroundColor: theme.palette.secondary.dark,
		//to avoid content being covered by open drawer
		[theme.breakpoints.down('sm')]: {
			marginLeft: 0,
			width: '100%',
		},
	},
	content: {
		padding: 0,
		margin: 0,
		width: '100%',
		flexGrow: 1,
		flexShrink: 0,
		flexBasis: 'auto',
		background: 'transparent',
	},
	footer: {
		// background: `linear-gradient(45deg, ${theme.palette.secondary.main} 20%, ${theme.palette.secondary.light} 80%)`,
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
