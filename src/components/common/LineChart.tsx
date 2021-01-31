import React, { useState } from 'react';
import { useEffect } from 'react';

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

const options = {
	...{
		maintainAspectRatio: false,
		responsive: true,
		legend: {
			display: false,
		},
		tooltips: {
			enabled: false,
			custom: false,
		},
		elements: {
			point: {
				radius: 0,
			},
			line: {
				tension: 0.33,
			},
		},
		scales: {
			xAxes: [
				{
					gridLines: false,
					ticks: {
						display: false,
					},
				},
			],
			yAxes: [
				{
					gridLines: false,
					scaleLabel: false,
					ticks: {
						display: false,
						isplay: false,
					},
				},
			],
		},
	},
};

function LineChart() {
	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData(data);
		setChartOptions(options);
	}, []);

	return (
		<>
			<Line data={chartData} options={chartOptions} />
		</>
	);
}

export default LineChart;
