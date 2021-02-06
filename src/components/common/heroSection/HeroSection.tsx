import React from 'react';
import { useSpring, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	heroContainer: {
		width: '100%',
		height: 600,
		// willChange: 'width, height, left, top'
	},
}));

function HeroSection() {
	const classes = useStyles();
	const props = useSpring({
		from: {
			left: '0%',
			top: '0%',
			width: '0%',
			height: '0%',
			background: 'lightgreen',
		},
		to: async (
			next: (arg0: {
				left?: string;
				top?: string;
				width?: string;
				height?: string;
				background: string;
			}) => any
		) => {
			while (1) {
				await next({
					left: '0%',
					top: '0%',
					width: '100%',
					height: '100%',
					background: 'lightblue',
				});
				await next({ height: '50%', background: 'lightgreen' });
				await next({
					width: '50%',
					left: '50%',
					background: 'lightgoldenrodyellow',
				});
				await next({ top: '0%', height: '100%', background: 'lightpink' });
				await next({ top: '50%', height: '50%', background: 'lightsalmon' });
				await next({ width: '100%', left: '0%', background: 'lightcoral' });
				await next({ width: '50%', background: 'lightseagreen' });
				await next({ top: '0%', height: '100%', background: 'lightskyblue' });
				await next({ width: '100%', background: 'lightslategrey' });
			}
		},
	});
	return (
		<div className={classes.heroContainer}>
			<animated.div style={props} />
			<Typography variant='h1' color='primary'>
				Tally Up
			</Typography>
		</div>
	);
}

export default HeroSection;
