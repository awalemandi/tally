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
		backgroundColor: theme.palette.secondary.light,
		padding: theme.spacing(2, 0, 2, 0),
	},
	heroButtons: {
		marginTop: theme.spacing(2),
    },
    terms: {
        marginTop: theme.spacing(2)
    }
}));

const Banner = () => {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<div className={classes.heroContent}>
				<Container maxWidth='md'>
					<Typography
						variant='h3'
						align='left'
						color='primary'
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
						<Grid container spacing={2} justify='flex-start'>
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
                    <Typography
						variant='subtitle2'
						align='left'
						color='textSecondary'
                        paragraph
                        className={classes.terms}
					>
						<u>Terms and conditions apply</u>. 1 month free not available for users who have already tried Premium.
					</Typography>
				</Container>
			</div>
		</>
	);
};

export default Banner;
