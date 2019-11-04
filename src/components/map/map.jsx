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
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Room`, `House`, `Hotel`]).isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    description: PropTypes.string,
    host: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
    }).isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }).isRequired
  })).isRequired
};

export default Map;
