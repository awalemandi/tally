import React from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Box, Container, Slide, makeStyles, Button} from '@material-ui/core';

import Footer from '../layout/Footer';
import Logo from '../../images/tally.png';
import LandingSection from '../common/landingSection/LandingSection';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	navbar: {
		height: '4rem',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	logo: {
		marginLeft: '5px',
		flexShrink: 1,
		float: 'left',
		height: '130px',
		alignSelf: 'center',
		[theme.breakpoints.down('sm')]: {
			height: '110px',
		},
	},
	buttonContainer: {
		width: '12rem',
		display: 'flex',
		justifyContent: 'space-between',
	},
	navLink: {
		textDecoration: 'none',
		alignSelf: 'center',
	},
}));

interface Props {
	window?: () => Window;
	children: React.ReactElement;
}

function HideOnScroll(props: Props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

export default function LandingPage() {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<HideOnScroll>
				<AppBar color='default'>
					<Toolbar className={classes.navbar}>
						<Link to='/'>
							<img src={Logo} className={classes.logo} />
						</Link>
						<Box className={classes.buttonContainer}>
							<Link to='/login' className={classes.navLink}>
								<Button size='small' variant='text' href='#contained-buttons'>
									Log In
								</Button>
							</Link>
							<Link to='/signup' className={classes.navLink}>
								<Button
									size='large'
									variant='contained'
									color='primary'
									href='#contained-buttons'
								>
									Sign Up
								</Button>
							</Link>
						</Box>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
			<div className={classes.root}>
				<LandingSection bgPrimary={true} />
				{/* <Box my={2}>
					{[...new Array(12)]
						.map(
							() =>
								`This is the landing page. It's what users will see when they first get on the webiste.`
						)
						.join('\n')}
				</Box>
				<Box my={2}>
					{[...new Array(12)]
						.map(
							() =>
								`This is the landing page. It's what users will see when they first get on the webiste.`
						)
						.join('\n')}
				</Box> */}
				<Footer />
			</div>
		</>
	);
}
