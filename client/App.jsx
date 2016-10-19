import React from 'react';
import ReactDOM from 'react-dom';

// Material includes
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';

// Components
import UploadButton from './components/Button';

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<AppBar title="Body Count"/>
					<UploadButton name="allo"/>
				</div>
			</MuiThemeProvider>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('app')
);