import {Link} from 'react-router-dom';
import {sortOffersByCity, groupOffersByCity} from '../../utils/utils';
import {Offer} from '../../types/interfaces';
import FavoriteOfferCard from '../favorite-offer-card/favorite-offer-card';

interface Props {
  favoriteOffers: Offer[]
}

const FavoritesList = (props: Props) => {
  const {favoriteOffers} = props;

  sortOffersByCity(favoriteOffers);
  const offersGroups = groupOffersByCity(favoriteOffers);

  return <>
    <ul className="favorites__list">
      {Object.entries(offersGroups).map((offersGroup: [string, Offer[]], i) => (
        <li className="favorites__locations-items" key={i}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>{offersGroup[0]}</span>
              </Link>
            </div>
          </div>

          <div className="favorites__places">
            {offersGroup[1].map((offer) => (
              <FavoriteOfferCard key={offer.id} offer={offer}/>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </>;
};

export default FavoritesList;
