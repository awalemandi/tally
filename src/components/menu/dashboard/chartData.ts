//dummy data
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

export const debitCreditData = {
	datasets: [
		{
			data: [63, 37],
			backgroundColor: ['rgb(147, 215, 218, 0.7)', 'rgb(233, 73, 87, 0.7)'],
			hoverBackgroundColor: [
				'rgb(132, 207, 211)',
				'rgb(233, 73, 87)',
				// 'rgb(235, 216, 169)',
			],
			borderWidth: 1,
		},
	],
	labels: ['You\'re Owed', 'You Owe'],
};

export const debtByCategoryData = {
	labels: ['Family', 'Friends', 'Business', 'Credit Card', 'Education', 'Mortgage'],
	datasets: [
		{
			borderWidth: 1,
			borderColor: 'rgb(207, 143, 100)',
			backgroundColor: 'rgb(236, 192, 111, 0.5)',
			data: [32, 44, 67, 36, 55, 92],
		},
	],
};

//chart options

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

export const doughnutOptions = {
	...{
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			position: 'bottom',
			labels: {
				padding: 25,
				boxWidth: 20,
			},
		},
		cutoutPercentage: 65,
		tooltips: {
			custom: false,
			mode: 'index',
			position: 'nearest',
		},
	},
};

export const radarOptions = {
	...{
		responsive: true,
		maintainAspectRatio: true,
		scale: {
			ticks: {
				beginAtZero: true,
				display: false,
				stepSize: 20,
			},
			pointLabels: {
				fontSize: 12,
			},
		},
		elements: {
			line: {
				tension: 0.33,
			},
		},
		legend: {
			position: 'left',
			display: false,
		},
	},
};