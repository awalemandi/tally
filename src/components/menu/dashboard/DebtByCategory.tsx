import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import {
	Box,
	Grid,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Typography,
	colors,
	makeStyles,
	useTheme,
	ThemeProvider,
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import TabletIcon from '@material-ui/icons/Tablet';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		flexGrow: 2,
		flexShirk: 1,
	},
	chart: {
		marginBot: theme.spacing(1),
	},
	category: {
		textAlign: 'center',
	},
}));

const DebtByCategory = () => {
	const classes = useStyles();
	const theme = useTheme();

	const data = {
		datasets: [
			{
				data: [63, 15, 22],
				backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
				hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
				borderWidth: 8,
				borderColor: colors.common.white,
				hoverBorderColor: colors.common.white,
			},
		],
		labels: ['Family', 'Friends', 'Bank'],
	};

	const options = {
		animation: false,
		cutoutPercentage: 80,
		layout: { padding: 0 },
		legend: {
			display: false,
		},
		maintainAspectRatio: false,
		responsive: true,
		tooltips: {
			backgroundColor: theme.palette.background.default,
			bodyFontColor: theme.palette.text.secondary,
			borderColor: theme.palette.divider,
			borderWidth: 1,
			enabled: true,
			footerFontColor: theme.palette.text.secondary,
			intersect: false,
			mode: 'index',
			titleFontColor: theme.palette.text.primary,
		},
	};

	const devices = [
		{
			title: 'Family',
			value: 63,
			icon: LaptopMacIcon,
			color: colors.indigo[500],
		},
		{
			title: 'Friends',
			value: 15,
			icon: TabletIcon,
			color: colors.red[600],
		},
		{
			title: 'Bank',
			value: 23,
			icon: PhoneIcon,
			color: colors.orange[600],
		},
	];

	return (
		<Card className={clsx(classes.root)}>
			<CardHeader title='Debt by Category' />
			<Divider />
			<CardContent className={classes.content}>
				<Box className={classes.chart}>
					<Doughnut data={data} options={options} />
				</Box>
				<Grid container justify='center' alignItems='center'>
					{devices.map(({ color, icon: Icon, title, value }) => (
						<Grid item xs={4} key={title} className={classes.category}>
							<Icon color='action' />
							<Typography color='textPrimary' variant='body1'>
								{title}
							</Typography>
							<Typography style={{ color }} variant='h6'>
								{value}%
							</Typography>
						</Grid>
					))}
				</Grid>
			</CardContent>
		</Card>
	);
};

DebtByCategory.propTypes = {
	className: PropTypes.string,
};

export default DebtByCategory;
