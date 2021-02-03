import React, { useState, useEffect } from 'react';

import { Radar } from 'react-chartjs-2';

interface ChartConfig {
	data: object;
	options: object;
}

function RadarChart({ data, options }: ChartConfig) {
	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData(data);
		setChartOptions(options);
	}, []);

	return (
		<>
			<Radar data={chartData} options={chartOptions} />
		</>
	);
}

export default RadarChart;
