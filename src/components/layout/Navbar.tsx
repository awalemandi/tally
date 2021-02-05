import React from 'react';
import {
	AppBar,
	CssBaseline,
	Divider,
	Drawer,
	Hidden,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Box,
	Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, LinkProps } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	GrDashboard,
	GrCurrency,
	GrCalculator,
	GrGremlin,
	GrDiamond,
} from 'react-icons/gr';
import { Omit } from '@material-ui/types';

import Logo from '../../images/tally.png';

export const drawerWidth: number = 250;

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
		background: theme.palette.secondary.light
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
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const handleListItemClick = (event: any, index: number) => {
		setSelectedIndex(index);
	};

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	interface ListItemLinkProps {
		icon?: React.ReactElement;
		primary: string;
		to: string;
		listIndex: number;
	}

	const ListItemLink = (props: ListItemLinkProps) => {
		const { icon, primary, to, listIndex } = props;

		const renderLink = React.useMemo(
			() =>
				React.forwardRef<any, Omit<LinkProps, 'to'>>((itemProps, ref) => (
					<Link to={to} ref={ref} {...itemProps} />
				)),
			[to]
		);

		return (
			<li>
				<ListItem
					button
					component={renderLink}
					selected={listIndex === selectedIndex}
					onClick={(event: any) => handleListItemClick(event, listIndex)}
				>
					{icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
					<ListItemText primary={primary} />
				</ListItem>
			</li>
		);
	};

	const drawer = (
		<div>
			{/* <div className={classes.toolbar} /> */}
			<Link to='/'>
				<img src={Logo} className={classes.logo} />
			</Link>
			<Divider />
			<List>
				<ListItemLink
					to='/home/dashboard'
					primary='Dashboard'
					icon={<GrDashboard />}
					listIndex={0}
				/>
				<ListItemLink
					to='/home/newtally'
					primary='New Tally'
					icon={<GrCurrency />}
					listIndex={1}
				/>
				<ListItemLink
					to='/home/history'
					primary='History'
					icon={<GrCalculator />}
					listIndex={2}
				/>
			</List>
			<Divider />
			<List>
				<ListItemLink
					to='/home/profile'
					primary='Profile'
					icon={<GrGremlin />}
					listIndex={3}
				/>
				<ListItemLink
					to='/home/premium'
					primary='Premium'
					icon={<GrDiamond />}
					listIndex={4}
				/>
			</List>
		</div>
	);

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
						<Link to='/'>
							<img src={Logo} className={classes.logo} />
						</Link>
					</Hidden>
					<div></div>
					<Box className={classes.buttonContainer}>
						<Link to='/login' className={classes.navLink}>
							<Button
								size='small'
								variant='text'
								href='#contained-buttons'
								color='primary'
							>
								Log Out
							</Button>
						</Link>
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
						{drawer}
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
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</>
	);
};
