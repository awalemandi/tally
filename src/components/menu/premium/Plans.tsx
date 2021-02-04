import React from 'react';
import {
	Button,
	CssBaseline,
	Typography,
	Container,
	Grid,
	Card,
	CardHeader,
	CardContent,
	CardActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {FaRegHandPointRight} from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
	'@global': {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: 'none',
		},
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	heroContent: {
		padding: theme.spacing(8, 0, 6),
	},
	cardHeader: {
		backgroundColor: theme.palette.primary.light,
	},
	cardPricing: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
		marginBottom: theme.spacing(2),
	},
}));

const tiers = [
	{
		title: 'Free',
		price: '0',
		description: [
			'1 user',
			'Basic financial metrics',
			'Single device login',
			'Single theme',
		],
		buttonText: 'Invite friends',
		buttonVariant: 'outlined',
	},
	{
		title: 'Individual',
		price: '11.99',
		description: [
			'1 user',
			'Bonus financial metrics',
			'Multiple device support',
			'Data export (.xls, .csv)',
			'Personalized insights',
			'15+ custom themes',
		],
		buttonText: 'Get started',
		buttonVariant: 'contained',
	},
	{
		title: 'Duo',
		price: '16.99',
		description: [
			'2 users',
			'Bonus financial metrics',
			'Multiple device support',
			'Data export (.xls, .csv)',
			'Personalized insights',
			'15+ custom themes',
		],
		buttonText: 'Contact us',
		buttonVariant: 'outlined',
	},
];

const Plans = () => {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<Container maxWidth='md' component='main' className={classes.heroContent}>
				<Typography
					component='h1'
					variant='h4'
					align='left'
					color='textPrimary'
					gutterBottom
				>
					Pick your Premium
				</Typography>
				<Typography
					variant='h6'
					align='left'
					color='textSecondary'
					component='p'
				>
					Make the most of Tally. Get personalized insights, add custom themes
					and break free from ads.
				</Typography>
			</Container>
			{/* End hero unit */}
			<Container maxWidth='md' component='main'>
				<Grid
					container
					spacing={5}
					alignItems='flex-start'
					justify='flex-start'
				>
					{tiers.map(tier => (
						<Grid
							item
							key={tier.title}
							xs={12}
							sm={6}
							md={4}
						>
							<Card>
								<CardHeader
									title={tier.title}
									titleTypographyProps={{ align: 'center' }}
									subheaderTypographyProps={{ align: 'center' }}
									action={null}
									className={classes.cardHeader}
								/>
								<CardContent>
									<div className={classes.cardPricing}>
										<Typography component='h2' variant='h3' color='textPrimary'>
											${tier.price}
										</Typography>
										<Typography variant='h6' color='textSecondary'>
											/mo
										</Typography>
									</div>
									<ul>
										
										{tier.description.map(line => (
											<Typography
												component='li'
												variant='subtitle1'
												align='center'
												key={line}
											><FaRegHandPointRight style={{marginRight: 7}}/>
												{line}
											</Typography>
										))}
									</ul>
								</CardContent>
								<CardActions>
									<Button fullWidth variant='outlined' color='primary'>
										{tier.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default Plans;
