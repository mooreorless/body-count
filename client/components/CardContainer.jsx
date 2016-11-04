import React, { PropTypes, PureComponent } from 'react';
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
import ImageFlashOn from 'material-ui/svg-icons/image/flash-on'

import { Col } from 'react-bootstrap';

import LoadingSpinner from './LoadingSpinner';
import EmptyState from './EmptyState';
import ErrorState from './ErrorState';
import formHelper from '../helpers';


function CardContainer(props) {

  const btnStyles = {
    position: 'absolute',
    bottom: 10,
    right: 20,

  }

  if (props.showEmptyState) {
    return <EmptyState />
  }

  if (props.data.length === 0) {
    return <ErrorState />
  }
  else {
    const webcams = props.data.map(
      (i, k) => (
        <Col md={6} key={k}>
          <Card className="active-camera">
            <CardHeader title={i.location.city} />
            <CardMedia>
              <img src={i.image.current.thumbnail} />
            </CardMedia>
            <form id='webcamForm' method='get' action='/activate'>
              <input type='hidden' value={i.image.daylight.preview} name='webcamUrl'/>
              <FloatingActionButton style={btnStyles} className="pull-right" backgroundColor="#E91E63">
                <ImageFlashOn />
              </FloatingActionButton>
              <input type='submit' value='activate'/>
            </form>
          </Card>
        </Col>

      )
    )
    return <div>{webcams}</div>;
  }
}


// declate prop types here (look up react propTypes). helps with error handlind. i.e. i was passing an object from axios it turns out.
CardContainer.propTypes = {
  data: PropTypes.array,
};


// declare default props values here. saves error checking.
CardContainer.defaultProps = {
  data: [],
};

export default CardContainer;
