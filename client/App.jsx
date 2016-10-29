import React from 'react';
import ReactDOM from 'react-dom';

// Material includes
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';

// Bootstrap Grid
import { Grid, Row, Col } from 'react-bootstrap';

// Components
import UploadButton from './components/Button';


class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<AppBar title="Body Count"/>
					<Grid>
						<Row>
							<Col md={12}>
								<UploadButton/>
							</Col>
						</Row>
					</Grid>
				</div>
			</MuiThemeProvider>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('app')
);