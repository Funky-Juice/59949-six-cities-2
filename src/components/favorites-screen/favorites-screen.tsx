import FavoritesList from '../favorites-list/favorites-list';
import {Offer} from '../../types/interfaces';

interface Props {
  favoriteOffers: Offer[]
  getUser: () => void
  getFavoriteOffers: () => void
}

class FavoritesScreen extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  _renderEmptyScreen() {
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

  _renderFavoritesList() {
    return <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <FavoritesList {...this.props}/>
          </section>
        </div>
      </main>
    </>;
  }

  render() {
    const {getUser, favoriteOffers, getFavoriteOffers} = this.props;

    if (!favoriteOffers) {
      getFavoriteOffers();
      getUser();
      return <></>;
    }
    if (!favoriteOffers.length) {
      return this._renderEmptyScreen();
    }
    return this._renderFavoritesList();
  }
}

export default FavoritesScreen;
