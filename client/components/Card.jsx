import React from 'react';


import { Col } from 'react-bootstrap';


const Card = (props) => (
  <Col md={3} key={props.key}>
    <Card className="active-camera" onClick={(e) => this.activateCamera(e)}>
      <CardHeader title={props.label} />
      <CardMedia>
        <img src="../img/webcam.jpg" />
      </CardMedia>
    </Card>
  </Col>
);

export default Card;