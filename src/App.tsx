import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import LogIn from './components/pages/LogIn';
import LandingPage from './components/pages/LandingPage';
import { SignUp } from './components/pages/SignUp';
import NoMatch from './components/menu/NoMatch';

function App() {
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Router>
			<div className='App' style={{background: 'linear-gradient(45deg, "#F0FFF0" 20%, "#A8DADC" 80%)'}}>
				<Switch>
					<Route exact path='/'>
						<LandingPage />
					</Route>
					<Route path='/signup'>
						<SignUp />
					</Route>
					<Route path='/login'>
						<LogIn />
					</Route>
					<Route path='/home'>
						<Home />
					</Route>
					<Route path='*'>
					<NoMatch />
				</Route>
				</Switch>
			</div>
		</Router>
		</MuiPickersUtilsProvider>
	);
}

export default App;
