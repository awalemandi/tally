import React from 'react';
import {
	Button,
	CssBaseline,
	Typography,
	Container,
	Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
}));

const Banner = () => {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<div className={classes.heroContent}>
				<Container maxWidth='md'>
					<Typography
						component='h1'
						variant='h3'
						align='left'
						color='textPrimary'
						gutterBottom
					>
						Try Premium free for 1 month
					</Typography>
					<Typography
						variant='h5'
						align='left'
						color='textSecondary'
						paragraph
					>
						Just $11.99/month after. Cancel anytime.
					</Typography>
					<div className={classes.heroButtons}>
						<Grid container spacing={2} justify='center'>
							<Grid item>
								<Button variant='contained' color='primary'>
									Get Started
								</Button>
							</Grid>
							<Grid item>
								<Button variant='outlined' color='primary'>
									View Plans
								</Button>
							</Grid>
						</Grid>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Banner;
