import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import image1 from '../../../images/transfer.svg';
// import video from '../../../videos/piggyVideo.mp4';

interface SectionProps {
    id?: string;
    bgLight: boolean;
    header: string;
    description: string;
    image: string;
    alt: string;
}

function LandingSection({ id, bgLight, header, description, image, alt }: SectionProps) {
	const useStyles = makeStyles(theme => ({
		sectionContainer: {
			width: '100%',
			height: 600,
			backgroundColor: bgLight
				? theme.palette.secondary.light
				: theme.palette.primary.main,
		},
		contentWrapper: {
			width: '100%',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
        },
        textWrapper: {
            margin: theme.spacing(2),
            padding: theme.spacing(2),
        },
        header: {

        },
        description: {
            marginTop: theme.spacing(2)
        },
        image: {
            width: '20rem',
        }
	}));
	const classes = useStyles();
	return (
		<Grid
			container
			justify='space-evenly'
			alignItems='stretch'
            className={classes.sectionContainer}
            id={id}
		>
			<Grid item xs={12} sm={6}>
				<div className={classes.contentWrapper}>
					<div className={classes.textWrapper}>
                    <Typography variant='h3' color={bgLight ? 'primary' : 'secondary'} className={classes.header}>
						{header}
					</Typography>
					<Typography variant='body1' color={bgLight ? 'primary' : 'secondary'} className={classes.description}>
					{description}
					</Typography>
                    </div>
				</div>
			</Grid>
			<Grid item xs={12} sm={6}>
				<div className={classes.contentWrapper}>
                    <img src={image} className = {classes.image} alt={alt}/>
				</div>
			</Grid>
		</Grid>
	);
}

export default LandingSection;
