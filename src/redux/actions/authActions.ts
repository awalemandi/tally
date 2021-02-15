import { AuthActionTypes } from "../constants";

export const setUsers = (users: any) => ({
	type: AuthActionTypes.SET_USERS,
	payload: users,
});
