interface transactionData {
    transactionType: 'lent' | 'borrowed';
    amount: number;
    party: string;
    date: string;
    category: string;
}

export const transactions = [
    {
        transactionType: 'lent',
        amount: 300,
        party: 'Katy',
        date: '10/12/20',
        category: 'Friends'

    }
]