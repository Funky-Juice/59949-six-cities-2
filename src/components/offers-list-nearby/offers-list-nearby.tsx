import {Offer} from '../../types/interfaces';
import OfferCard from '../offer-card/offer-card';

interface Props {
  activeOffer: Offer
  activeOffers: Offer[]
}

const OffersListNearby = (props: Props) => {
  const {activeOffer, activeOffers} = props;

  if (!activeOffers) {
    return <></>;
  }

  return <>
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>

      <div className="near-places__list places__list">
        {activeOffers.map((offer: Offer) => {
          if (offer.id === activeOffer.id) {
            return null;
          }
          return <OfferCard
            key={`offer-${offer.id}`}
            offer={offer}
            showOffer={() => {}}
          />;
        })}
      </div>
    </section>
  </>;
};

export default OffersListNearby;
