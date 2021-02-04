//inport images
import transfer from '../../../images/transfer.svg';
import dashboard from '../../../images/dashboard.svg';
import sync from '../../../images/sync.svg';
import savings from '../../../images/savings.svg';
import decision from '../../../images/decision.svg';
import couple from '../../../images/couple.svg';

export const sectionOne = {
    id: `transfer`,
    bgLight: true,
    header: `Keep track of your IOUs`,
    description: `Never forget who you owe or more importantly, who owes you! 🤑 `, 
    image: transfer,
    alt: `Digital transfer`
}

export const sectionTwo = {
    id: `dashboard`,
    bgLight: false,
    header: `Ditch the Spreadsheet`,
    description: `Time to keep up with the times and stop entering numbers on a spreadsheet.`,
    image: dashboard,
    alt: `Modern dashboard`
}

export const sectionThree = {
    id: `sync`,
    bgLight: true,
    header: `All your data synced`,
    description: `With the latest and greatest cloud technology powering the Tally platform, you can access your data on any device at any time securely.`,
    image: sync,
    alt: `Cloud synced devices`
}

export const sectionFour = {
    id: `savings`,
    bgLight: false,
    header: `Save more with Tally`,
    description: `Understand your spending habits and save more by learning about your trends.`,
    image: savings,
    alt: `Piggy bank`
}

export const sectionFive = {
    id: `decision`,
    bgLight: true,
    header: `Make Data-driven Decisions`,
    description: `Get personalized insights from your past transactions and make the best analytical decisions.`,
    image: decision,
    alt: `Decision making`
}

export const sectionSix = {
    id: `couple`,
    bgLight: false,
    header: `Make the most of Tally with new Duo`,
    description: `Be the financial power couple by sharing Tally premium.`,
    image: couple,
    alt: `Couple cards`
}