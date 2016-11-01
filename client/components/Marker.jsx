import React from 'react';

import { Marker } from 'google-maps-react';


const Point = () => (
  <Marker name={"Test"} position={{ lat: 37.778519, lng: -122.405640 }} />
);


export default Point;