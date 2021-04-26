//constants
export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const NEED_VERIFICATION = 'NEED_VERIFICATION';
export const SET_SUCCESS = 'SET_SUCCESS';

export const SET_TRANSACTION = 'SET_TRANSACTION';


//store state interface
export interface User {
	firstName: string;
	lastName: string;
	email: string;
	id: string;
	userName: string;
	createdAt: any;
	category: [],
	party: [],
	outstanding: number;
	totalCredit: number;
	totalDebit: number;
	transactions: {};
}

export interface AuthState {
	user: User | null;
	authenticated: boolean;
	loading: boolean;
	error: string;
	needVerification: boolean;
	success: string;
}

export interface SignUpData {
	firstName: string;
	lastName: string;
	userName: string;
	email: string;
	password: string;
	subscribeNewsletter: boolean;
}

export interface SignInData {
	email: string;
	password: string;
	remember: boolean;
}

//Actions interface
interface SetUserAction {
	type: typeof SET_USER;
	payload: User;
}

interface SetLoadingAction {
	type: typeof SET_LOADING;
	payload: boolean;
}

interface SignOutAction {
	type: typeof SIGN_OUT;
}

interface SetErrorAction {
	type: typeof SET_ERROR;
	payload: string;
}

interface SetLoadingAction {
	type: typeof SET_LOADING;
	payload: boolean;
}

interface NeedVerificationAction {
	type: typeof NEED_VERIFICATION;
}

interface SetSuccessAction {
	type: typeof SET_SUCCESS;
	payload: string;
}

export type AuthAction =
	| SetUserAction
	| SetLoadingAction
	| SignOutAction
	| SetErrorAction
	| NeedVerificationAction
	| SetSuccessAction;


	//transaction types
	export interface TransactionData {
		id: string;
		date: string;
		amount: number;
		type: 'lent' | 'burrowed';
		category: string;
		reason: string;
	};

	export interface TransactionState {
		loading: boolean;
		error: string;
		success: string;
	};

	export interface SetTransactionAction {
		type: typeof SET_TRANSACTION;
		payload: TransactionData;
	}

	export type TransactionAction = | SetTransactionAction | SetLoadingAction | SetErrorAction| SetSuccessAction;

