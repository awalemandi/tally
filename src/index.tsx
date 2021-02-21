import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './theme';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
				<ThemeProvider theme={lightTheme}>
					<App />
				</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
