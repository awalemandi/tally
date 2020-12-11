import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import LandingPage from './components/pages/LandingPage';
import { SignUp } from './components/pages/SignUp';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<LandingPage />
				{/* <SignUp/> */}
				{/* <SignIn /> */}
				{/* <Home /> */}
			</div>
		</BrowserRouter>
	);
}

export default App;
