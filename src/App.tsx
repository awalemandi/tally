import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import firebase from './firebase/config';
import LinearProgress from '@material-ui/core/LinearProgress';

import {
	getUserById,
	setLoading,
	setNeedVerification,
} from './redux/actions/authActions';
import { RootState } from './redux/store';

import Home from './components/pages/Home';
import LandingPage from './components/pages/LandingPage';
import { SignUp } from './components/pages/SignUp';
import NoMatch from './components/menu/NoMatch';
// import { user } from './components/menu/profile/AccountCard';
import SignIn from './components/pages/SignIn';
import ForgotPassword from './components/pages/ForgotPassword';

function App() {
	const dispatch = useDispatch();
	const { loading, user } = useSelector((state: RootState) => state.auth);

	//Check if user already exists
	useEffect(() => {
		dispatch(setLoading(true));
		const unsubscribe = firebase.auth().onAuthStateChanged(async user => {
			if (user) {
				dispatch(setLoading(true));
				await dispatch(getUserById(user.uid));
				if (!user.emailVerified) {
					dispatch(setNeedVerification());
				}
			}
			dispatch(setLoading(false));
		});

		return () => {
			unsubscribe();
		};
	}, [dispatch]);

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			{loading ? (
				<LinearProgress />
			) : (
				<Router>
					<div
						className='App'
						style={{
							background:
								'linear-gradient(45deg, "#F0FFF0" 20%, "#A8DADC" 80%)',
						}}
					>
						<Switch>
							<PublicRoute exact path='/' component={LandingPage} />
							<PublicRoute exact path='/signup' component={SignUp} />
							<PublicRoute exact path='/signin' component={SignIn} />
							<PublicRoute
								exact
								path='/forgot-password'
								component={ForgotPassword}
							/>
							<PrivateRoute path={`/${user?.userName}`} component={Home} />
							<Route path='*'>
								<NoMatch />
							</Route>
						</Switch>
					</div>
				</Router>
			)}
		</MuiPickersUtilsProvider>
	);
}

export default App;
