import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offer: {}
    };
  }

  render() {
    return this._renderOffers(this.props.offers);
  }

  _renderOffers(offers) {
    return <section className="cities__places places">
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) =>
          <OfferCard
            key={`offer-${i}-${offer.price}`}
            offer={offer}
            showOffer={() => this._setOffer.call(this, offer)}
          />
        )}
      </div>
    </section>;
  }

  _setOffer(offer) {
    this.setState(() => {
      return {offer};
    });
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default OffersList;
