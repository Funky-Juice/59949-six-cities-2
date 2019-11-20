import {offerPropTypes} from '../../prop-types/prop-types';
import OfferCard from '../offer-card/offer-card';

class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.setActiveOfferId = this.props.setActiveOfferId;
    this._setActiveOfferId = this._setActiveOfferId.bind(this);
  }

  _setActiveOfferId(id) {
    this.setActiveOfferId(id);
  }

  _showOfferDetails(id) {
    location.pathname = `offer-${id}`;
  }

  _renderOffers(offers) {
    return <>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <OfferCard
            key={`offer-${offer.id}`}
            offer={offer}
            showOffer={this._setActiveOfferId}
            getOfferDetails={this._showOfferDetails}
          />
        )}
      </div>
    </>;
  }

  render() {
    return this._renderOffers(this.props.activeOffers);
  }
}

OffersList.propTypes = {
  setActiveOfferId: PropTypes.func.isRequired,
  activeOffers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default OffersList;
