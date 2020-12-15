import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import LogIn from './components/pages/LogIn';
import LandingPage from './components/pages/LandingPage';
import { SignUp } from './components/pages/SignUp';

function App() {
	return (
		<Router>
			<div className='App'>
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
				</Switch>
			</div>
		</Router>
	);
}

export default App;
