import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './theme';
import './index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={lightTheme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
