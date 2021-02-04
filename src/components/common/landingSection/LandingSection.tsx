import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

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
		textContainer: {
			width: '100%',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'flex-end',
			[theme.breakpoints.down('md')]:{
				alignItems: 'center'
            }
		},
		imageContainer: {
			width: '100%',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
        },
        textWrapper: {
            width: '80%',
            margin: theme.spacing(2),
            padding: theme.spacing(5, 0, 5, 5),
            [theme.breakpoints.down('md')]:{
                margin: theme.spacing(1),
                padding: theme.spacing(1)
            }
        },
        header: {
			color: bgLight? theme.palette.primary.dark : theme.palette.secondary.light
        },
        description: {
			marginTop: theme.spacing(2),
			color: bgLight? theme.palette.primary.dark : theme.palette.secondary.light
        },
        image: {
			width: '50%',
			[theme.breakpoints.down('xs')]: {
				width: '65%'
			}
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
			<Grid item xs={12} md={6}>
				<div className={classes.textContainer}>
					<div className={classes.textWrapper}>
                    <Typography variant='h3' className={classes.header}>
						{header}
					</Typography>
					<Typography variant='body1' className={classes.description}>
					{description}
					</Typography>
                    </div>
				</div>
			</Grid>
			<Grid item xs={12} md={6}>
				<div className={classes.imageContainer}>
                    <img src={image} className = {classes.image} alt={alt}/>
				</div>
			</Grid>
		</Grid>
	);
}

export default LandingSection;
