import { ThunkAction } from 'redux-thunk';

import {
	SignUpData,
	AuthAction,
	SET_USER,
	User,
	SET_LOADING,
	SIGN_OUT,
	SignInData,
	SET_ERROR,
	NEED_VERIFICATION,
	SET_SUCCESS,
} from '../types';
import { RootState } from '../store';
import firebase from '../../firebase/config';

//Create user
export const signup = (
	data: SignUpData,
	onError: () => void
): ThunkAction<void, RootState, null, AuthAction> => {
	return async dispatch => {
		try {
			const res = await firebase
				.auth()
				.createUserWithEmailAndPassword(data.email, data.password);
			if (res.user) {
				const userData: User = {
					email: data.email,
					firstName: data.firstName,
					lastName: data.lastName,
					userName: data.userName,
					id: res.user.uid,
					createdAt: firebase.firestore.FieldValue.serverTimestamp(),
					category: [],
					party: [],
					outstanding: 0,
					totalCredit: 0,
					totalDebit: 0,
					transactions: {}
				};
				await firebase
					.firestore()
					.collection('/users')
					.doc(res.user.uid)
					.set(userData);
				await res.user.sendEmailVerification();
				dispatch({
					type: NEED_VERIFICATION,
				});
				dispatch({
					type: SET_USER,
					payload: userData,
				});
			}
		} catch (err) {
			console.log(err);
			onError();
			dispatch({
				type: SET_ERROR,
				payload: err.message,
			});
		}
	};
};

//Get user by id
export const getUserById = (
	id: string
): ThunkAction<void, RootState, null, AuthAction> => {
	return async dispatch => {
		try {
			const user = await firebase.firestore().collection('users').doc(id).get();
			if (user.exists) {
				const userData = user.data() as User;
				dispatch({
					type: SET_USER,
					payload: userData,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};
};

//Set loading
export const setLoading = (
	value: boolean
): ThunkAction<void, RootState, null, AuthAction> => {
	return dispatch => {
		dispatch({
			type: SET_LOADING,
			payload: value,
		});
	};
};

//Log in
export const signin = (
	data: SignInData,
	onError: () => void
): ThunkAction<void, RootState, null, AuthAction> => {
	return async dispatch => {
		try {
			//To remember user or not to?
			if (data.remember) {
				await firebase
					.auth()
					.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
					.then(() => {
						return firebase
							.auth()
							.signInWithEmailAndPassword(data.email, data.password);
					});
			} else {
				await firebase
					.auth()
					.setPersistence(firebase.auth.Auth.Persistence.SESSION)
					.then(() => {
						return firebase
							.auth()
							.signInWithEmailAndPassword(data.email, data.password);
					});
			}
		} catch (err) {
			console.log(err);
			onError();
			dispatch(setError(err.message));
		}
	};
};

//Log out
export const signout = (): ThunkAction<void, RootState, null, AuthAction> => {
	return async dispatch => {
		try {
			dispatch(setLoading(true));
			await firebase.auth().signOut();
			dispatch({
				type: SIGN_OUT,
			});
		} catch (err) {
			console.log(err);
			dispatch(setLoading(false));
		}
	};
};

//Set Error
export const setError = (
	msg: string
): ThunkAction<void, RootState, null, AuthAction> => {
	return dispatch => {
		dispatch({
			type: SET_ERROR,
			payload: msg,
		});
	};
};

//Set need verification
export const setNeedVerification = (): ThunkAction<
	void,
	RootState,
	null,
	AuthAction
> => {
	return dispatch => {
		dispatch({
			type: NEED_VERIFICATION,
		});
	};
};

//Set Success
export const setSuccess = (
	msg: string
): ThunkAction<void, RootState, null, AuthAction> => {
	return dispatch => {
		dispatch({
			type: SET_SUCCESS,
			payload: msg,
		});
	};
};

//Send password reset email
export const sendPasswordResetEmail = (
	email: string,
	successMsg: string
): ThunkAction<void, RootState, null, AuthAction> => {
	return async dispatch => {
		try {
			await firebase.auth().sendPasswordResetEmail(email);
			dispatch(setSuccess(successMsg));
		} catch (err) {
			console.log(err);
			dispatch(setError(err.message));
		}
	};
};
