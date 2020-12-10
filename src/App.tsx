import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				{/* <Home /> */}
				<SignIn />
			</div>
		</BrowserRouter>
	);
}

export default App;
