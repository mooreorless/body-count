import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	render() {
		const greeting = 'Hello World';
		return (
			<h1>{ greeting }</h1>
		)
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('app')
);