import { Doughnut } from 'react-chartjs-2';
import React from 'react';

const data = {
	labels: ['Friends', 'Family', 'Mortgage'],
	datasets: [
		{
			data: [300, 50, 100],
			backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
			hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
		},
	],
};

const DoughnutChart = () => {
	return (
		<div>
			<h2>Amounts by category: </h2>
			<Doughnut data={data} />
		</div>
	);
};

export default DoughnutChart;
