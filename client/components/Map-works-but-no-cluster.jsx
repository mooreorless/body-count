/*
 * Base Google Map example
 */
import React, { PropTypes, Component } from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';

export default class SimpleMapPage extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [-27, 153],
    zoom: 9,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
  };

  // shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      width: '685px',
      height: '600px'
    };

    return (
      <div style={style}>
        <GoogleMap
          options={style}
          bootstrapURLKeys={{ key: 'AIzaSyCyLRHV6E418L6yeXfc1PfH74jRTBe_mis' }}
          center={this.props.center}
          zoom={2}>
        </GoogleMap>
      </div>
    );
  }
}
