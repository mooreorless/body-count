import React from 'react';

import {
  Image,
  Col,
  Row,
} from 'react-bootstrap';


const EmptyState = () => (
  <Col md={12} className="empty-state">
    <img className="img img-responsive" src="../img/state-2.png" />
    <div>
      <h2 className="text-muted">No webcams found...</h2>
      <h4 className="text-muted">Try searching for a country above</h4>
    </div>
  </Col>
);

export default EmptyState;