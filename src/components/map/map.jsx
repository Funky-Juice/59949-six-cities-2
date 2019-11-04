import {PureComponent} from 'react';
import initMap from './map-config';

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <section className="cities__map map">
      <div id="map" style={{height: `100%`}}></div>
    </section>;
  }

  componentDidMount() {
    initMap();
  }
}

export default Map;
