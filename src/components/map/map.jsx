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
    this.iconSize = [30, 30];
    this.markers = leaflet.layerGroup();
  }

  get icon() {
    return leaflet.icon({
      iconUrl: this.iconUrl,
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
  }

  componentWillUnmount() {
    this.map.remove();
  }

  _focusView(city) {
    const {latitude: x, longitude: y} = city.location;
    this.map.setView([x, y], this.zoom);
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
  activeCity: PropTypes.object.isRequired,
  activeOffers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default Map;
