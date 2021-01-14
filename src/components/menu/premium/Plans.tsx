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
		backgroundColor:
			theme.palette.primary.light
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
			'10 users included',
			'2 GB of storage',
			'Help center access',
			'Email support',
		],
		buttonText: 'Sign up for free',
		buttonVariant: 'outlined',
	},
	{
		title: 'Pro',
		subheader: 'Most popular',
		price: '15',
		description: [
			'20 users included',
			'10 GB of storage',
			'Help center access',
			'Priority email support',
		],
		buttonText: 'Get started',
		buttonVariant: 'contained',
	},
	{
		title: 'Enterprise',
		price: '30',
		description: [
			'50 users included',
			'30 GB of storage',
			'Help center access',
			'Phone & email support',
		],
		buttonText: 'Contact us',
		buttonVariant: 'outlined',
	},
];
const footers = [
	{
		title: 'Company',
		description: ['Team', 'History', 'Contact us', 'Locations'],
	},
	{
		title: 'Features',
		description: [
			'Cool stuff',
			'Random feature',
			'Team feature',
			'Developer stuff',
			'Another one',
		],
	},
	{
		title: 'Resources',
		description: [
			'Resource',
			'Resource name',
			'Another resource',
			'Final resource',
		],
	},
	{
		title: 'Legal',
		description: ['Privacy policy', 'Terms of use'],
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
				<Grid container spacing={5} alignItems='flex-start'justify='flex-start'>
					{tiers.map(tier => (
						// Enterprise card is full width at sm breakpoint
						<Grid
							item
							key={tier.title}
							xs={12}
							sm={tier.title === 'Enterprise' ? 12 : 6}
							md={4}
						>
							<Card>
								<CardHeader
									title={tier.title}
									subheader={tier.subheader}
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
											>
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
