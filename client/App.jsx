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
import Map from './components/Map';
import CardContainer from './components/CardContainer';
import EmptyState from './components/EmptyState';


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
								<Map />
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