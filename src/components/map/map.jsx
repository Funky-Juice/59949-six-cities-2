import {PureComponent, createRef} from 'react';
import {offerPropTypes} from '../../prop-types/prop-types';
import initMap from './map-config';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.ref = createRef();
  }

  render() {
    return <section className="cities__map map">
      <div ref={this.ref} style={{height: `100%`}}></div>
    </section>;
  }

  componentDidMount() {
    initMap(this.props.offers, this.ref.current);
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default Map;
