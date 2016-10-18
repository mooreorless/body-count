import React from 'react';
import ReactDOM from 'react-dom';

//Material includes
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';

class App extends React.Component {
	render() {
		const greeting = 'Hello World';
		return (
			<h1>{ greeting }</h1>
		)
	}
};

class Main extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<AppBar title="Body Count"/>
			</MuiThemeProvider>
		);
	}
};

ReactDOM.render(
	<Main />,
	document.getElementById('app')
);