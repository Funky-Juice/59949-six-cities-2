import {PureComponent, createRef} from 'react';
import {offerPropTypes} from '../../prop-types/prop-types';
import {connect} from 'react-redux';
import leaflet from 'leaflet';


class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.ref = createRef();
    this.map = null;

    this.city = [52.38333, 4.9];
    this.zoom = 12;
    this.iconUrl = `img/pin.svg`;
    this.iconSize = [30, 30];
  }

  get icon() {
    return leaflet.icon({
      iconUrl: this.iconUrl,
      iconSize: this.iconSize
    });
  }

  componentDidMount() {
    this.mapInit(this.props.offers, this.ref.current);
  }

  componentDidUpdate() {
    this._focusView(this.props.activeCity);
  }

  _focusView(city) {
    const {latitude: x, longitude: y} = city.location;
    this.map.setView([x, y], this.zoom);
  }

  mapInit(offersList, container) {
    this.map = leaflet.map(container, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });

    this.renderLayer();

    if (offersList) {
      this.renderPoints(offersList);
    }

    this.map.setView(this.city, this.zoom);
  }

  renderLayer() {
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `\
      &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
      contributors &copy; 
      <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
  }

  renderPoints(offersList) {
    offersList.map((offer) => {
      const {latitude: x, longitude: y} = offer.location;

      leaflet
        .marker([x, y], {icon: this.icon})
        .addTo(this.map);
    });
  }

  render() {
    return <>
      <section className="cities__map map">
        <div ref={this.ref} style={{height: `100%`}}></div>
      </section>
    </>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    activeCity: state.activeCity
  });
};


Map.propTypes = {
  activeCity: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default connect(mapStateToProps)(Map);
