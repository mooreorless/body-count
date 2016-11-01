import React from 'react';

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

  renderCard(data) {
    return (
      <Col md={3} key={data.key}>
        <Card>
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

