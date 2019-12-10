import {sortOffersByCity, groupOffersByCity} from '../../utils/utils';
import {offerPropTypes} from '../../prop-types/prop-types';
import FavoriteOfferCard from '../favorite-offer-card/favorite-offer-card';

const FavoritesList = (props) => {
  const {favoriteOffers} = props;

  sortOffersByCity(favoriteOffers);
  const offersGroups = groupOffersByCity(favoriteOffers);

  return <>
    <ul className="favorites__list">
      {Object.entries(offersGroups).map((offersGroup, i) => (
        <li className="favorites__locations-items" key={i}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{offersGroup[0]}</span>
              </a>
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

FavoritesList.propTypes = {
  favoriteOffers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default FavoritesList;
