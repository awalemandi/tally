import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
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
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { HiUserAdd } from 'react-icons/hi';

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
		maxWidth: '20rem',
		height: '80%',
		display: 'flex',
		justifyContent: 'space-between',
	},
	navLink: {
		textDecoration: 'none',
		alignSelf: 'center',
		margin: '0.5rem',
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
			{/* //Landing page Navbar */}
			<HideOnScroll>
				<AppBar color='default'>
					<Toolbar className={classes.navbar}>
						<RouterLink to='/'>
							<img src={Logo} className={classes.logo} />
						</RouterLink>
						<Box className={classes.buttonContainer}>
							<RouterLink to='/signin' className={classes.navLink}>
								<Button
									size='small'
									variant='text'
									href='#contained-buttons'
									onClick={() => history.push('/signin')}
									startIcon={<RiAccountPinCircleFill />}
								>
									Log In
								</Button>
							</RouterLink>
							<RouterLink to='/signup' className={classes.navLink}>
								<Button
									size='large'
									variant='contained'
									color='primary'
									href='#contained-buttons'
									onClick={() => history.push('/signup')}
									startIcon={<HiUserAdd />}
								>
									Sign Up
								</Button>
							</RouterLink>
						</Box>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
			<div className={classes.root}>
				{/* animation for hero section */}
				{/* <HeroSection /> */}
				{/* //Generate landing page section components from landingPageData */}
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
