//dummy data for stat cards
export const outstandingAmountData = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	datasets: [
		{
			label: 'Outstanding',
			data: [34, 44, 30, 47, 41, 40, 34],
			fill: true,
			borderWidth: 1,
			backgroundColor: 'rgb(146, 230, 209, 0.3)',
			borderColor: 'rgb(82, 212, 169)',
		},
	],
};

export const totalDebtData = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	datasets: [
		{
			label: 'Debt',
			data: [34, 44, 30, 47, 41, 40, 34],
			fill: true,
			borderWidth: 1,
			backgroundColor: 'rgb(236, 116, 122, 0.1)',
			borderColor: '#f08089',
		},
	],
};

export const statCardOptions = {
	...{
		maintainAspectRatio: false,
		responsive: true,
		legend: {
			display: false,
			position: 'bottom',
			labels: {
				padding: 25,
				boxWidth: 20,
			},
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
