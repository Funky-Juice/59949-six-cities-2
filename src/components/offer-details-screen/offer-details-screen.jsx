import {Redirect} from 'react-router-dom';
import {offerPropTypes} from '../../prop-types/prop-types';
import OfferDetails from '../offer-details/offer-details';
import OffersListNearby from '../offers-list-nearby';
import {shuffleOffers} from '../../utils/utils';

const FIRST_OFFER_ITEM = 0;
const LAST_OFFER_ITEM = 3;

class OfferDetailsScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.setActiveCity = this.props.setActiveCity;
    this.setActiveOffers = this.props.setActiveOffers;
    this.setActiveOfferId = this.props.setActiveOfferId;
  }

  componentDidMount() {
    const {getUser, getOffers, clearAllOffers} = this.props;
    clearAllOffers();
    getOffers();
    getUser();
  }

  _setActiveOffers(offer) {
    const {offers} = this.props;

    let cityOffers = offers.filter((it) => {
      return it.id !== offer.id && it.city.name === offer.city.name;
    });

    cityOffers = shuffleOffers(cityOffers).slice(FIRST_OFFER_ITEM, LAST_OFFER_ITEM);
    cityOffers.push(offer);

    this.setActiveOffers(cityOffers);
  }

  _renderScreen() {
    const {offers, match} = this.props;
    const offer = offers.find(({id}) => id === parseInt(match.params.id, 10));

    if (!offer) {
      return <Redirect to="/"/>;
    }

    this.setActiveCity(offer.city);
    this.setActiveOfferId(offer.id);
    this._setActiveOffers(offer);

    return <>
      <main className="page__main page__main--property">
        <OfferDetails offer={offer}/>

        <div className="container">
          <OffersListNearby activeOffer={offer}/>
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

OfferDetailsScreen.propTypes = {
  match: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes),
  getUser: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired,
  setActiveCity: PropTypes.func.isRequired,
  clearAllOffers: PropTypes.func.isRequired,
  setActiveOffers: PropTypes.func.isRequired,
  setActiveOfferId: PropTypes.func.isRequired
};

export default OfferDetailsScreen;
