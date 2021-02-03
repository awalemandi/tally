import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import image1 from '../../../images/piggy.gif';
// import video from '../../../videos/piggyVideo.mp4';

interface SectionProps {
	bgPrimary: boolean;
}

function LandingSection({ bgPrimary }: SectionProps) {
	const useStyles = makeStyles(theme => ({
		sectionContainer: {
			width: '100%',
			height: 600,
			backgroundColor: bgPrimary ? theme.palette.primary.light : '#FFF',
		},
		contentWrapper: {
			width: '100%',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
	}));
	const classes = useStyles();
	return (
		<Grid
			container
			justify='space-evenly'
			alignItems='stretch'
			className={classes.sectionContainer}
		>
			<Grid item xs={12} sm={6}>
				<div className={classes.contentWrapper}>
					<Typography variant='h3' color={bgPrimary ? 'inherit' : 'primary'}>
						Header Text Goes Here
					</Typography>
					<Typography variant='body1' color={bgPrimary ? 'inherit' : 'primary'}>
						Body text paragraph.Body text paragraph.Body text paragraph. Body
						text paragraph.Body text paragraph.Body text paragraph.Body text
						paragraph.Body text paragraph.Body text paragraph. Body text
						paragraph.Body text paragraph.Body text paragraph.
					</Typography>
				</div>
			</Grid>
			<Grid item xs={12} sm={6}>
				<div className={classes.contentWrapper}>
					<img src={image1} />
				</div>
			</Grid>
		</Grid>
	);
}

export default LandingSection;
