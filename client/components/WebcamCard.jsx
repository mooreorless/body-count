import React from 'react';
import axios from 'axios';

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ImageFlashOn from 'material-ui/svg-icons/image/flash-on';

import { Col } from 'react-bootstrap';

import {
  EmptyState,
  ErrorState,
  LoadingSpinner,
} from './';


class WebcamCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.styles = {
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      btn: {
        position: 'absolute',
        bottom: 10,
        right: 20,
      }
    };
  };

  activateCamera(camera) {
    return axios.get(`/activate?webcamUrl=${camera}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderCard(data) {
    return (
      <Col lg={6} md={2} sm={12} key={data.id}>
        <Card className="active-camera">
          <CardHeader title={data.location.city} />
          <CardMedia>
            <img src={data.image.current.thumbnail} />
          </CardMedia>
          <FloatingActionButton style={this.styles.btn} className="pull-right" backgroundColor="#E91E63" onClick={() => this.activateCamera(data.image.daylight.preview)}>
            <ImageFlashOn />
          </FloatingActionButton>
        </Card>
      </Col>
    );
  }

  render() {
    if (this.props.showEmptyState) {
      return <EmptyState />
    }

    if (this.props.data.length === 0) {
      return <ErrorState />
    } else {
      return (
        <div style={this.styles.wrapper}>
          {this.props.data.map(this.renderCard, this)}
        </div>
      );
    }
  }

};

export default WebcamCard;
