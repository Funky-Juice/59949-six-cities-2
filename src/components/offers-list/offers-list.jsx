import {offerPropTypes} from '../../prop-types/prop-types';
import OfferCard from '../offer-card/offer-card';


class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offer: {}
    };
  }

  render() {
    return this._renderOffers(this.props.activeOffers);
  }

  _renderOffers(offers) {
    return <>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) =>
          <OfferCard
            key={`offer-${i}-${offer.price}`}
            offer={offer}
            showOffer={this._setOffer.bind(this, offer)}
            getOfferDetails={this._showOfferDetails}
          />
        )}
      </div>
    </>;
  }

  _setOffer(offer) {
    this.setState(() => {
      return {offer};
    });
  }

  _showOfferDetails(id) {
    location.pathname = `offer-${id}`;
  }
}


OffersList.propTypes = {
  activeOffers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default OffersList;
