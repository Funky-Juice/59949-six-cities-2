import {activeCityPropTypes, offerPropTypes} from '../../prop-types/prop-types';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withMap from '../../hocs/with-map/with-map';

import OffersListContainer from '../offers-list-container/offers-list-container';
import CitiesList from '../cities-list';
import Map from '../map';

const MapWrapped = withMap(Map);
const CitiesListWrapped = withActiveItem(CitiesList);

class MainScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {getOffers, clearAllOffers} = this.props;
    clearAllOffers();
    getOffers();
  }

  _renderScreen() {
    const {offers, activeCity, activeOffers} = this.props;

    return <>
      <main className={`page__main page__main--index ${!activeOffers.length ? `page__main--index-empty` : ``}`}>
        {offers.length > 0 && <CitiesListWrapped offers={offers}/>}

        <div className="cities">
          <div className={`cities__places-container container ${!activeOffers.length ? `cities__places-container--empty` : ``}`}>
            <OffersListContainer
              activeOffers={activeOffers}
              activeCity={activeCity}
            />

            <div className="cities__right-section">
              {activeOffers.length > 0 && <MapWrapped mapClass={`cities`}/>}
            </div>
          </div>
        </div>
      </main>
    </>;
  }

  render() {
    const {offers} = this.props;

    if (!offers) {
      return <></>;
    }
    return this._renderScreen();
  }
}

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  getOffers: PropTypes.func.isRequired,
  activeCity: activeCityPropTypes,
  activeOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  clearAllOffers: PropTypes.func.isRequired
};

export default MainScreen;
