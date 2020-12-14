import React from 'react';
import { 
	BrowserRouter,
	Switch,
	Route,
} from 'react-router-dom';
import Home from './components/pages/Home';
import LogIn from './components/pages/LogIn';
import LandingPage from './components/pages/LandingPage';
import { SignUp } from './components/pages/SignUp';


function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Switch>
					<Route exact path='/'>
						<LandingPage />
					</Route>
					<Route exact path='/signup'>
						<SignUp />
					</Route>
					<Route exact path='/login'>
						<LogIn/>
					</Route>
					<Route exact path='/home'>
						<Home />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
