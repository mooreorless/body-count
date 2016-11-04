import React from 'react';
import ReactDOM from 'react-dom';

// Material includes
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';

// Bootstrap Grid
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';

// Custom Components
import {
    SearchBar,
    Filter,
    Map,
} from './components';


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