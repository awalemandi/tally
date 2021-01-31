import React, { useState, useEffect } from 'react';

import { Doughnut } from 'react-chartjs-2';

interface ChartConfig {
	data: object;
	options: object;
}

function DoughnutChart({ data, options }: ChartConfig) {
	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData(data);
		setChartOptions(options);
	}, []);

	return (
		<>
			<Doughnut data={chartData} options={chartOptions} />
		</>
	);
}

export default DoughnutChart;
