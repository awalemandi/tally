import React from 'react';
import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	Link as RouterLink,
	LinkProps as RouterLinkProps,
	useRouteMatch,
} from 'react-router-dom';
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
	logo: {
		marginLeft: 15,
		flexShrink: 1,
		float: 'left',
		height: '110px',
		alignSelf: 'center',
	},
}));

interface ListItemLinkProps {
	icon?: React.ReactElement;
	primary: string;
	to: string;
	listIndex: number;
}

const SideDrawer = () => {
	let { url } = useRouteMatch();
	console.log(`sidebar url: ${url}`);
	const classes = useStyles();
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const handleListItemClick = (event: any, index: number) => {
		setSelectedIndex(index);
	};

	const ListItemLink = (props: ListItemLinkProps) => {
		const { icon, primary, to } = props;

		const renderLink = React.useMemo(
			() =>
				React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
					<RouterLink to={to} ref={ref} {...itemProps} />
				)),
			[to]
		);

		return (
			<li>
				<ListItem button component={renderLink}>
					{icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
					<ListItemText primary={primary} />
				</ListItem>
			</li>
		);
	};

	return (
		<div>
			{/* <div className={classes.toolbar} /> */}
			<RouterLink to={`${url}/`}>
				<img src={Logo} className={classes.logo} />
			</RouterLink>
			<Divider />
			<List>
				<ListItemLink
					to={`${url}`}
					primary='Dashboard'
					icon={<GrDashboard />}
					listIndex={0}
				/>
				<ListItemLink
					to={`${url}/newtally`}
					primary='New Tally'
					icon={<GrCurrency />}
					listIndex={1}
				/>
				<ListItemLink
					to={`${url}/history`}
					primary='History'
					icon={<GrCalculator />}
					listIndex={2}
				/>
			</List>
			<Divider />
			<List>
				<ListItemLink
					to={`${url}/profile`}
					primary='Profile'
					icon={<GrGremlin />}
					listIndex={3}
				/>
				<ListItemLink
					to={`${url}/premium`}
					primary='Premium'
					icon={<GrDiamond />}
					listIndex={4}
				/>
			</List>
		</div>
	);
};

export default SideDrawer;
