//Dependency Imports
import { Router, Link, Redirect } from '@reach/router';

//View Imports
import Parser from "./Views/Parser.jsx";

//Style Imports
import './App.css';

function App() {
	return (
		<div className='App'>
			<header>
				<h1>Request Parser</h1>
				<Link to="/parser">Parser</Link>
			</header>
			<Router>
				<Redirect noThrow from="/" to="/parser" />
				<Parser path="/parser" />
			</Router>
		</div>
	);
}

export default App;