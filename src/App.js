import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import useScript from './hooks/useScript';
import Header from './components/Header';

function App() {
	useScript(`${window.location.origin}/assets/js/plugins.js`);
	useScript(`${window.location.origin}/assets/js/classy-nav.min.js`);
	useScript(`${window.location.origin}/assets/js/active.js`);
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/" component={HomePage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
