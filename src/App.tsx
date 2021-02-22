import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import LogIn from './components/pages/SignIn';
import LandingPage from './components/pages/LandingPage';
import { SignUp } from './components/pages/SignUp';
import NoMatch from './components/menu/NoMatch';
import { user } from './components/menu/profile/AccountCard';
import SignIn from './components/pages/SignIn';
import ForgotPassword from './components/pages/ForgotPassword';

function App() {
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Router>
				<div
					className='App'
					style={{
						background: 'linear-gradient(45deg, "#F0FFF0" 20%, "#A8DADC" 80%)',
					}}
				>
					<Switch>
						<Route exact path='/'>
							<LandingPage />
						</Route>
						<Route path='/signup'>
							<SignUp />
						</Route>
						<Route path='/signin'>
							<SignIn />
						</Route>
						<Route path='/forgot-password'>
							<ForgotPassword />
						</Route>
						<Route path={`/${user.username}`}>
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
