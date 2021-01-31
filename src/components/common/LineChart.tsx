import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';

import { Line } from 'react-chartjs-2';

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
			<Line data={chartData} options={chartOptions} />
		</>
	);
}

export default LineChart;
