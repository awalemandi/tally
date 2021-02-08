import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import {getFirestore } from 'redux-firestore';
import {getFirebase } from 'react-redux-firebase';
import rootReducer from './reducers/rootReducer';

const middleware = applyMiddleware(
	thunk.withExtraArgument({ getFirebase, getFirestore })
);

const store = createStore(rootReducer, middleware);

export default store;
