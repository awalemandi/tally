import React, { useState, useEffect } from 'react';

import { Bar } from 'react-chartjs-2';

interface ChartConfig {
	data: object;
	options: object;
}

function LineChart({ data, options }: ChartConfig) {
	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData(data);
		setChartOptions(options);
	}, []);

	return (
		<>
			<Bar data={chartData} options={chartOptions} />
		</>
	);
}

export default LineChart;
