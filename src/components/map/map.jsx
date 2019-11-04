import {PureComponent} from 'react';
import PropTypes from 'prop-types';
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
    initMap(this.props.offers);
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Map;
