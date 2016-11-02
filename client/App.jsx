import React from 'react';
import ReactDOM from 'react-dom';

// Material includes
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';

// Bootstrap Grid
import { Grid, Row, Col } from 'react-bootstrap';

// Components
import SearchButton from './components/Button';
import SearchBar from './components/SearchBar';
import WebcamCard from './components/WebcamCard';
import Filter from './components/Filter';
import GoogleMap from './components/Map';
import CardContainer from './components/CardContainer';


class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<AppBar title="Body Count" />
					<Grid fluid={true}>
						<Row>
							<Col md={6}>
								<SearchBar />
							</Col>
							<Col md={6}>
								<Filter />
							</Col>
						</Row>

						<Row>
							<Col md={6}>
								<CardContainer />
							</Col>
							<Col md={6}>
								<GoogleMap />
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