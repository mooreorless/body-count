import React from 'react';

import {
  Map,
  Marker,
} from 'google-maps-react';
import { GoogleApiWrapper } from 'google-maps-react';
import Panel from './Panel';


export class GoogleMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mapOptions: {} };
  }

  createCluster(map, markers) {
    const cluster = new MarkerClusterer(map, markers, { imagePath: '../img/markers/m' });
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
      <div>
        <Map style={style} ref="map" google={this.props.google} zoom={2}>
          <Marker name="test" position={{ lat: 37.778519, lng: -122.405640 }} icon={'/img/markers/m5.png'} />
        </Map>
      </div>
    );
  }
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDd3Oo9EcZeFawwpa_BVfEenewPDhoGNJw'
})(GoogleMap);