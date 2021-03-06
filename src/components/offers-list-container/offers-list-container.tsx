import {City, Offer} from '../../types/interfaces';
import withVisibleState from '../../hocs/with-visible-state/with-visible-state';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import OffersListTitle from '../offers-list-title/offers-list-title';
import OffersListSort from '../offers-list-sort';
import OffersList from '../offers-list';

interface Props {
  activeCity: City
  activeOffers: Offer[]
}

const OffersListSortWrapped = withVisibleState(withActiveItem(OffersListSort));

const OffersListContainer = (props: Props) => {
  const {activeCity, activeOffers} = props;

  if (activeOffers.length) {
    return <>
      <section className="cities__places places">
        <OffersListTitle
          activeCity={activeCity}
          activeOffers={activeOffers}
        />
        <OffersListSortWrapped
          activeCity={activeCity}
          activeOffers={activeOffers}
        />
        <OffersList/>
      </section>
    </>;
  } else {
    return <>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property availbale</p>
        </div>
      </section>
    </>;
  }
};

export default OffersListContainer;
