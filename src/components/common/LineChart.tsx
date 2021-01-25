import React from 'react';

import { Line } from 'react-chartjs-2';

const data = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	datasets: [
		{
			label: 'First dataset',
			data: [33, 53, 85, 41, 44, 65],
			fill: true,
			backgroundColor: 'rgba(75,192,192,0.2)',
			borderColor: 'rgba(75,192,192,1)',
		},
		{
			label: 'Second dataset',
			data: [33, 25, 35, 51, 54, 76],
			fill: false,
			borderColor: '#742774',
		},
	],
};

const chartOptions = {
	...{
		responsive: true,
		legend: {
			position: 'top',
		},
		elements: {
			line: {
				// A higher value makes the line look skewed at this ratio.
				tension: 0.3,
			},
			point: {
				radius: 0,
			},
		},
		scales: {
			xAxes: [
				{
					gridLines: false,
					ticks: {
						callback(tick: any, index: number) {
							// Jump every 7 values on the X axis labels to avoid clutter.
							return index % 7 !== 0 ? '' : tick;
						},
					},
				},
			],
			yAxes: [
				{
					ticks: {
						suggestedMax: 45,
						callback(tick: number) {
							if (tick === 0) {
								return tick;
							}
							// Format the amounts using Ks for thousands.
							return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
						},
					},
				},
			],
		},
		hover: {
			mode: 'nearest',
			intersect: false,
		},
		tooltips: {
			custom: false,
			mode: 'nearest',
			intersect: false,
		},
	},
};

function LineChart() {
	return (
		<>
			<Line data={data} options={chartOptions} />
		</>
	);
}

export default LineChart;
