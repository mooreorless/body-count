import React, { PropTypes, PureComponent } from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import { Col } from 'react-bootstrap';


function CardContainer(props) {


  const webcams = props.data.map(
    (i, k) => (
      <Col md={3} key={k}>
        <Card className="active-camera">
          <CardHeader title={i.title} />
          <CardMedia>
            <img src={i.image.current.thumbnail} />
          </CardMedia>
        </Card>
      </Col>
    )
  )

  // return list with cards in it
  return <div>{webcams}</div>;
}


// declate prop types here (look up react propTypes). helps with error handlind. i.e. i was passing an object from axios it turns out.
CardContainer.propTypes = {
  data: PropTypes.array,
  emptyState: PropTypes.array,
};


// declare default props values here. saves error checking.
CardContainer.defaultProps = {
  data: [],
  emptyState: [],
};

export default CardContainer;
