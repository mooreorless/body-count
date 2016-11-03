import React from 'react';

import {
  GoogleMap,
  GoogleMapLoader,
} from 'react-google-maps';


class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mapOptions: {} };
  }


  render() {
    const style = {
      width: '685px',
      height: '600px'
    };


    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div style={style}>
        <GoogleMapLoader style={style}>
          <GoogleMap style={style} ref="map" zoom={2} defaultCenter={{ lat: -27, lng: 153 }} />
        </GoogleMapLoader>
      </div>
    );
  }
};

export default Map;

