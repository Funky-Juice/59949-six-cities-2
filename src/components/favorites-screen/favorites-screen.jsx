import FavoritesList from '../favorites-list/favorites-list';
import {offerPropTypes} from '../../prop-types/prop-types';

const FavoritesScreen = (props) => {
  const {favoriteOffers} = props;

  if (!favoriteOffers.length) {
    return <>
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>

            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">
                Save properties to narrow down search or plan yor future trips.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>;
  }

  return <>
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>

          <FavoritesList {...props}/>
        </section>
      </div>
    </main>
  </>;
};

FavoritesScreen.propTypes = {
  favoriteOffers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default FavoritesScreen;
