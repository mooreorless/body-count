import React from 'react';

import {
  GoogleMap,
} from 'google-map-react';
import { GoogleApiWrapper } from 'google-maps-react';
import Panel from './Panel';


export class Map extends React.Component {
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


    // if (!this.props.loaded) {
    //   return <div>Loading...</div>
    // }
    return (
      <div style={style}>
        <GoogleMap zoom={3} />
      </div>
    );
  }
};

export default Map;

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDd3Oo9EcZeFawwpa_BVfEenewPDhoGNJw'
// })(Map);