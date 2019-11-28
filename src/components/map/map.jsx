import {activeCityPropTypes, offerPropTypes} from '../../prop-types/prop-types';
import leaflet from 'leaflet';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.map = null;

    this.city = [52.38333, 4.9];
    this.zoom = 12;
    this.iconUrl = `img/pin.svg`;
    this.activeIconUrl = `img/pin-active.svg`;
    this.iconSize = [30, 30];
    this.markers = leaflet.layerGroup();
    this.activeMarker = leaflet.layerGroup();
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
    setTimeout(() => {
      this._mapInit(this.props.mapRef.current);
      this._focusView(this.props.activeCity);
      this._renderPoints(this.props.activeOffers);
    }, 10);
  }

  componentDidUpdate(prevProps) {
    if (!this.map) {
      return;
    }

    if (prevProps.activeCity !== this.props.activeCity) {
      this._focusView(this.props.activeCity);
    }
    if (prevProps.activeOffers !== this.props.activeOffers) {
      this._renderPoints(this.props.activeOffers);
    }
    if (prevProps.activeOfferId !== this.props.activeOfferId) {
      this._highlightActiveOffer(this.props.activeOfferId);
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  _mapInit(container) {
    this.map = leaflet.map(container, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });

    this._renderLayer();
    this.map.setView(this.city, this.zoom);
  }

  _focusView(city) {
    if (city && city.location) {
      const {latitude: x, longitude: y} = city.location;
      this.map.setView([x, y], this.zoom);
    }
  }

  _highlightActiveOffer(offerId) {
    this.activeMarker.clearLayers();
    const activeOffer = this.props.activeOffers.find((it) => it.id === offerId);

    if (activeOffer) {
      const {latitude: x, longitude: y} = activeOffer.location;
      leaflet
          .marker([x, y], {icon: this.activeIcon})
          .addTo(this.activeMarker);

      this.map.addLayer(this.activeMarker);
    }
  }

  _renderLayer() {
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
    this.markers.clearLayers();
    this.activeMarker.clearLayers();

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
    return <></>;
  }
}

Map.propTypes = {
  mapRef: PropTypes.object.isRequired,
  activeOfferId: PropTypes.number,
  activeOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeCity: activeCityPropTypes
};

export default Map;
