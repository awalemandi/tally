import React from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { signout } from '../../redux/actions/authActions';

import MenuIcon from '@material-ui/icons/Menu';
import {
	AppBar,
	CssBaseline,
	Drawer,
	Link,
	Hidden,
	IconButton,
	Toolbar,
	Box,
	Button,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Logo from '../../images/tally.png';
import SideDrawer, { drawerWidth } from './SideDrawer';

//styling
const useStyles = makeStyles(theme => ({
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		// background: theme.palette.secondary.light,
		background: `linear-gradient(45deg, ${theme.palette.secondary.light} 20%, ${theme.palette.secondary.main} 80%)`,
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		background: theme.palette.secondary.light,
		// background: `linear-gradient(45deg, ${theme.palette.secondary.main} 20%, ${theme.palette.secondary.light} 80%)`,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	navbar: {
		height: '4rem',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	logo: {
		marginLeft: 15,
		flexShrink: 1,
		float: 'left',
		height: '110px',
		alignSelf: 'center',
	},
	buttonContainer: {
		justifySelf: 'end',
		width: '12rem',
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	navLink: {
		textDecoration: 'none',
		alignSelf: 'center',
	},
}));

export const Navbar = () => {
	const classes = useStyles();
	const theme = useTheme();
	const history = useHistory();

	//auth
	const dispatch = useDispatch();
	const { authenticated } = useSelector((state: RootState) => state.auth);
	const logoutClickHandler = () => {
		dispatch(signout());
		history.push('signin');
	};
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<>
			<CssBaseline />
			<AppBar color='default' position='fixed' className={classes.appBar}>
				<Toolbar className={classes.navbar}>
					<IconButton
						color='default'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<div></div>
					<Hidden mdUp>
						<RouterLink to='/'>
							<img src={Logo} className={classes.logo} />
						</RouterLink>
					</Hidden>
					<div></div>
					<Box className={classes.buttonContainer}>
						<Button size='small' variant='text' onClick={logoutClickHandler}>
							Sign out
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label='mailbox folders'>
				<Hidden smUp implementation='css'>
					<Drawer
						variant='temporary'
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{<SideDrawer />}
					</Drawer>
				</Hidden>
				<Hidden smDown implementation='css'>
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant='permanent'
						open
					>
						{<SideDrawer />}
					</Drawer>
				</Hidden>
			</nav>
		</>
	);
};
