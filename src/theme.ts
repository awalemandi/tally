import { createMuiTheme, colors } from '@material-ui/core/';

const lightTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#E63946',
		},
		secondary: {
			main: '#A8DADC',
		},
	},
	typography: {
		fontFamily: ['Open Sans', 'Roboto'].join(','),
	},
});

const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

export { lightTheme, darkTheme };
