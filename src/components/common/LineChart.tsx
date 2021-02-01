import React, { useState, useEffect } from 'react';

import { Typography } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

interface ChartConfig {
	data?: object;
	options?: object;
}

function LineChart({ data, options }: ChartConfig) {
	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		if (data && options) {
			setChartData(data);
			setChartOptions(options);
		}
	}, []);

	return <>{data ? <Line data={chartData} options={chartOptions} /> : null}</>;
}

export default LineChart;
