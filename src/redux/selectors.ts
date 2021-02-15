import {createSelector} from 'reselect';

const authState = (state: any) => state.auth;

export const makeSelectUsers = createSelector(authState, auth => auth.users);