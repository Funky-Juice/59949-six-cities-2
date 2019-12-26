import {Redirect, match} from 'react-router-dom';
import {Offer, City} from '../../types/interfaces';
import OfferDetails from '../offer-details/offer-details';
import OffersListNearby from '../offers-list-nearby';
import {shuffleOffers} from '../../utils/utils';

interface Props {
  match: match
  offers: Offer[]
  getUser: () => void
  getOffers: () => void
  clearAllOffers: () => void
  setActiveCity: (city: City) => void
  setActiveOffers: (offers: Offer[]) => void
  setActiveOfferId: (id: number) => void
}

const FIRST_OFFER_ITEM = 0;
const LAST_OFFER_ITEM = 3;

class OfferDetailsScreen extends React.PureComponent<Props> {
  private readonly setActiveCity: (city: City) => void;
  private readonly setActiveOffers: (offers: Offer[]) => void;
  private readonly setActiveOfferId: (id: number) => void;

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

export default OfferDetailsScreen;
