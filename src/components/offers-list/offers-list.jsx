import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

class OffersList extends PureComponent {
  static getScreen(props, showOffer) {
    const {offers} = props;

    return <section className="cities__places places">
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) =>
          <OfferCard key={`offer-${i}-${offer.price}`} offer={offer} showOffer={showOffer}/>
        )}
      </div>
    </section>;
  }

  constructor(props) {
    super(props);

    this.state = {
      offer: {}
    };
  }

  render() {
    return OffersList.getScreen(this.props, (offer) => {
      this.setState(() => {
        return {offer};
      });
    });
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default OffersList;
