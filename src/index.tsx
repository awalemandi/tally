import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './theme';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import firebase from './firebase/config';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

const rrfConfig = { userProfile: 'users' };

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
};

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<ThemeProvider theme={lightTheme}>
					<App />
				</ThemeProvider>
			</ReactReduxFirebaseProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
