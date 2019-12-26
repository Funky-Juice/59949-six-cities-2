import {Offer} from '../../types/interfaces';
import OfferCard from '../offer-card/offer-card';

interface Props {
  activeOffers: Offer[]
  setActiveOfferId: (id: number) => void
}

class OffersList extends React.PureComponent<Props> {
  private readonly setActiveOfferId: (id: number) => void;

  constructor(props) {
    super(props);

    this.setActiveOfferId = this.props.setActiveOfferId;
    this._setActiveOfferId = this._setActiveOfferId.bind(this);
  }

  _setActiveOfferId(id) {
    this.setActiveOfferId(id);
  }

  _renderOffers(offers) {
    return <>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <OfferCard
            key={`offer-${offer.id}`}
            offer={offer}
            showOffer={this._setActiveOfferId}
          />
        )}
      </div>
    </>;
  }

  render() {
    return this._renderOffers(this.props.activeOffers);
  }
}

export default OffersList;
