import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Typography,
	CssBaseline,
	useScrollTrigger,
	Box,
	Container,
	Slide,
	makeStyles,
	Button,
} from '@material-ui/core';

import Footer from '../layout/Footer';
import Logo from '../../images/tally.png';
import LandingSection from '../common/landingSection/LandingSection';
import landingPageData from '../common/landingSection/data';
import HeroSection from '../common/heroSection/HeroSection';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	navbar: {
		background: `linear-gradient(45deg, ${theme.palette.secondary.light} 20%, ${theme.palette.secondary.main} 80%)`,
		height: '4rem',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	logo: {
		marginLeft: '5px',
		flexShrink: 1,
		float: 'left',
		height: 110,
		alignSelf: 'center',
		[theme.breakpoints.down('sm')]: {
			height: 100,
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
	const history = useHistory();
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
							<Link to='/signin' className={classes.navLink}>
								<Button
									size='small'
									variant='text'
									href='#contained-buttons'
									onClick={() => history.push('/signin')}
								>
									Sign In
								</Button>
							</Link>
							<Link to='/signup' className={classes.navLink}>
								<Button
									size='large'
									variant='contained'
									color='primary'
									href='#contained-buttons'
									onClick={() => history.push('/signup')}
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
				<HeroSection />
				{landingPageData.map(section => (
					<LandingSection
						id={section.id}
						bgLight={section.bgLight}
						header={section.header}
						description={section.description}
						image={section.image}
						alt={section.alt}
					/>
				))}
				<Footer />
			</div>
		</>
	);
}
