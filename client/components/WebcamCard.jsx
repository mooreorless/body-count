import React from 'react';
import axios from 'axios';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { Col } from 'react-bootstrap';

class WebcamCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.state = {
      locations: [
        { key: 0, label: 'Brisbane' },
        { key: 1, label: 'NewYork' },
        { key: 2, label: 'Paris' },
        { key: 3, label: 'Berlin' }
      ]
    };

    this.styles = {
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
      }
    };
  }

  activateCamera(camera) {
    const client = axios.create({
      baseURL: 'https://webcamstravel.p.mashape.com',
      timeout: 5000,
      headers: { 'X-Mashape-Key': 'R2uptxyNFdmshy44f3GtJ0CjqCkCp1XT71rjsn2IpT5ZYhKHxO' }
    });
    //api call
    client.get('/webcams/list/country=AU?show=webcams:location,image,url')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  renderCard(data) {
    return (
      <Col md={3} key={data.key}>
        <Card className="active-camera" onClick={(e) => this.activateCamera(e)}>
          <CardHeader title={data.label} />
          <CardMedia>
            <img src="../img/webcam.jpg" />
          </CardMedia>
        </Card>
      </Col>
    );
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        {this.state.locations.map(this.renderCard, this)}
      </div>
    );
  }

};

export default WebcamCard;

