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
    const {clearOffers} = this.props;
    clearOffers();
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
              {activeOffers.length > 0 && <MapWrapped/>}
            </div>
          </div>
        </div>
      </main>
    </>;
  }

  render() {
    const {offers, getOffers} = this.props;

    if (!offers || offers.length < 1) {
      getOffers();
    }
    return this._renderScreen();
  }
}

MainScreen.propTypes = {
  getOffers: PropTypes.func.isRequired,
  clearOffers: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeCity: activeCityPropTypes
};

export default MainScreen;
