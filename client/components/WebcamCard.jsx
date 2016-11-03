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
    //send this webcam to the server to be processed
    // return axios.get('/upload', {
    //   params: {
    //     webcamUrl: 'https://images.webcams.travel/daylight/preview/1301039285.jpg'
    //   }
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    //turn on/off cameras here
  }


  renderCard(data) {
    return (
      <Col md={3} key={data.key}>
        <Card className="active-camera" onClick={(e) => this.activateCamera(e)}>
          <CardHeader title={data} />
          <CardMedia>
            <img src="../img/webcam.jpg" />
          </CardMedia>
        </Card>
      </Col>
    );
  }

  render() {
    if (!this.props.data) {
      return null;
    }
    return (
      <div style={this.styles.wrapper}>
        {this.props.data.map()}

      </div>
    );
  }

};

export default WebcamCard;

// {this.state.locations.map(this.renderCard, this)}