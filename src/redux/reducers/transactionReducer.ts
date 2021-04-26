import { TransactionData, TransactionState, SetTransactionAction} from '../types';

const initialState: TransactionState = {
    loading: false,
    error: '',
    success: ''
}

export default (state= initialState, action: SetTransactionAction) => {
	switch(action.type) {
	
			default:
			return state;
	}
}