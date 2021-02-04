
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
			backgroundColor: 'rgb(236, 116, 122, 0.2)',
			borderColor: '#EB5C68',
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
	labels: ["You're Owed", 'You Owe'],
};

export const debtByCategoryData = {
	labels: [
		'Family',
		'Friends',
		'Business',
		'Credit Card',
		'Education',
		'Mortgage',
	],
	datasets: [
		{
			borderWidth: 1,
			borderColor: 'rgb(207, 143, 100)',
			backgroundColor: 'rgb(236, 192, 111, 0.5)',
			data: [32, 44, 67, 36, 55, 92],
		},
	],
};

export const savingsData = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr'],
	datasets: [
		{
			label: 'Borrowed',
			data: [25, 50, 59, 10],
			fill: false,
			backgroundColor: 'rgb(235, 136, 111, 0.1)',
			borderColor: 'rgb(235, 136, 111)',
			borderWidth: 1,
		},
		{
			label: 'Lent',
			data: [50, 55, 84, 40],
			fill: false,
			borderColor: 'rgb(147, 215, 218)',
			backgroundColor: 'rgb(170, 103, 220, 0.1)',
			borderWidth: 1,
		},
		{
			label: 'Savings',
			data: [25, 5, 25, 30],
			fill: true,
			borderColor: 'rgb(170, 103, 220)',
			backgroundColor: 'rgb(170, 103, 220, 0.3)',
			borderWidth: 1,
		},
	],
};

export const performanceData = {
	labels: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
	],
	datasets: [
		{
			label: 'Amount',
			backgroundColor: 'rgb(22, 135, 167, 0.4)',
			borderColor: 'rgba(0,0,0,1, 0.2)',
			borderWidth: 1,
			maxBarThickness: 35,
			data: [6500, 5900, 5000, 6000, 5600, -3000, -4200, 2000],
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

export const lineOptions = {
	...{
		maintainAspectRatio: false,
		responsive: true,
		legend: {
			display: true,
			position: 'top',
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

export const barOptions = {
	...{
		responsive: true,
		maintainAspectRatio: true,
		barThickness: 100,
		legend: {
			position: 'top',
			labels: {
				padding: 25,
				boxWidth: 20,
			},
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