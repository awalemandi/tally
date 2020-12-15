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
});

const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

export { lightTheme, darkTheme };
