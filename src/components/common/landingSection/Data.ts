//inport images
import transfer from '../../../images/transfer.svg';
import dashboard from '../../../images/dashboard.svg';
import sync from '../../../images/sync.svg';
import savings from '../../../images/savings.svg';
import decision from '../../../images/decision.svg';
import couple from '../../../images/couple.svg';

export const landingPageData = [
	{
		id: `transfer`,
		bgLight: true,
		header: `Keep track of your IOUs`,
		description: `Never forget who you owe or more importantly, who owes you!`,
		image: transfer,
		alt: `Digital transfer`,
	},
	{
		id: `dashboard`,
		bgLight: false,
		header: `Ditch the Spreadsheet`,
		description: `Entering numbers on a spreadsheet? Aint nobody got time for that!`,
		image: dashboard,
		alt: `Modern dashboard`,
	},
	{
		id: `sync`,
		bgLight: true,
		header: `All your data synced`,
		description: `With the latest and greatest cloud technology powering the Tally platform, you can access your data on any device at any time, backed up and secure.`,
		image: sync,
		alt: `Cloud synced devices`,
	},
	{
		id: `savings`,
		bgLight: false,
		header: `Save more with Tally`,
		description: `Understand your spending habits and save more by learning about your trends.`,
		image: savings,
		alt: `Piggy bank`,
	},
	{
		id: `decision`,
		bgLight: true,
		header: `Make data driven decisions`,
		description: `Get personalized insights from your past transactions and make the best analytical decisions.`,
		image: decision,
		alt: `Decision making`,
	},
	{
		id: `couple`,
		bgLight: false,
		header: `Make the most of Tally with new Duo`,
		description: `Be the financial power couple by sharing Tally premium.`,
		image: couple,
		alt: `Couple cards`,
	},
];
