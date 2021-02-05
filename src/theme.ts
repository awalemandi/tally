import { createMuiTheme, colors } from '@material-ui/core/';

const lightTheme = createMuiTheme({
	palette: {
		primary: {
			light: '#EB5C68', //fiery rose
			main: '#E94957', //sizzling red
			dark: '#E63946', //imperial red
		},
		secondary: {
			light: '#f8f9fa', //cultured
			main: '#A8DADC', //powder blue
			dark: '#E9ECEF', //cultured dark
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
