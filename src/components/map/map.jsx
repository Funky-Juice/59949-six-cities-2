import {createRef} from 'react';
import {offerPropTypes} from '../../prop-types/prop-types';
import leaflet from 'leaflet';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.ref = createRef();
    this.map = null;

    this.city = [52.38333, 4.9];
    this.zoom = 12;
    this.iconUrl = `img/pin.svg`;
    this.activeIconUrl = `img/pin-active.svg`;
    this.iconSize = [30, 30];
    this.markers = leaflet.layerGroup();
  }

  get icon() {
    return leaflet.icon({
      iconUrl: this.iconUrl,
      iconSize: this.iconSize
    });
  }

  get activeIcon() {
    return leaflet.icon({
      iconUrl: this.activeIconUrl,
      iconSize: this.iconSize
    });
  }

  componentDidMount() {
    this._mapInit(this.ref.current);
  }

  componentDidUpdate() {
    this.markers.clearLayers();
    this._focusView(this.props.activeCity);
    this._renderPoints(this.props.activeOffers);
    this._highlightActiveOffer(this.props.activeOfferId);
  }

  componentWillUnmount() {
    this.map.remove();
  }

  _focusView(city) {
    if (city.location) {
      const {latitude: x, longitude: y} = city.location;
      this.map.setView([x, y], this.zoom);
    }
  }

  _highlightActiveOffer(offerId) {
    const activeOffer = this.props.activeOffers.find((it) => it.id === offerId);
    if (activeOffer) {
      const {latitude: x, longitude: y} = activeOffer.location;
      leaflet
          .marker([x, y], {icon: this.activeIcon})
          .addTo(this.map);
    }
  }

  _mapInit(container) {
    this.map = leaflet.map(container, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });

    this.renderLayer();
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

  _renderPoints(offersList) {
    offersList.map((offer) => {
      const {latitude: x, longitude: y} = offer.location;
      const marker = leaflet.marker(
          [x, y], {icon: this.icon}
      );

      this.markers.addLayer(marker);
    });

    this.map.addLayer(this.markers);
  }

  render() {
    return <>
      <section className="cities__map map">
        <div ref={this.ref} style={{height: `100%`}}></div>
      </section>
    </>;
  }
}

Map.propTypes = {
  activeOfferId: PropTypes.number,
  activeOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeCity: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  }).isRequired
};

export default Map;
